from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from authentication.models import BookDetails


def home(request):
    return render(request, "base.html")


# Registration Function
def registration(request):

    # If request method is POST then store the value of Form data.
    if request.method == "POST":
        fname = request.POST["firstname"]
        lname = request.POST["lastname"]
        email = request.POST["email"]
        username = request.POST["username"]
        password = request.POST["password"]
        confirm_password = request.POST["confirm_password"]

        details = {
                "username": username,
                "email": email,
                "password": password,
                "firstname": fname,
                "lastname": lname,
                "confirm_password": confirm_password,
            }
        
        # checking the uniqueness of username.
        if User.objects.filter(username=username):
            messages.error(request,
                           "User name already exists!Please try another")
            return render(request, "registration.html",
                          context={"details": details})

        # checking the uniqueness of email.
        if User.objects.filter(email=email):
            messages.error(request,
                           "Email already exists!Please try another")
            return render(request, "registration.html",
                          context={"details": details})

        # checking password and confirm password are same or not.
        if password != confirm_password:
            messages.error(request,
                           "Password and Confirm Password didn't match")
            return render(request, "registration.html",
                          context={"details": details})

        # Store the form data in objects.
        myuser = User.objects.create_user(username, email, password)
        myuser.first_name = fname
        myuser.last_name = lname

        """ If the registration is successful then save data
        and navigate to login page."""
        myuser.save()
        messages.success(request, "Your Registration is successful!!")
        return redirect("/home/login")

    return render(request, "registration.html")


# Login Function
def signin(request):

    # If request method is POST then store the value of Form data.
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        # Authenticate the user with username and password.
        user = authenticate(username=username, password=password)

        """If login is successful then navigate user to dashboard.
        else display error message and keep the user in login page."""
        if user is not None:
            login(request, user)
            return redirect("/home/dashboard/")
        else:
            messages.error(request, "Your Username or Password is Wrong")
            return redirect("/home/login")

    return render(request, "login.html")


# Logout Function
def signout(request):
    logout(request)

    # If logout is successful then navigate user to home page.
    messages.success(request, "You are successfully Logged out")
    return redirect("/home/login/")


def addbooks(request):
    if request.method == "POST":
        user = request.user
        bookname = request.POST["bookname"]
        authorname = request.POST["authorname"]
        bookimage = request.POST["bookimage"]
        print(bookimage)
        
        details = BookDetails(user=user, bookname=bookname,
                              authorname=authorname, bookimage=bookimage)
        details.save()
        return redirect('/home/dashboard/')
    else:
        return render(request, 'dashboard.html')


@login_required
def dashboard(request):
    books = BookDetails.objects.filter(user=request.user)
    context = {'books': books}
    return render(request, 'dashboard.html', context)
