from django.urls import path
from authentication import views

urlpatterns = [
    path("", views.home, name="home"),
    path("registration/", views.registration, name="registration"),
    path("login/", views.signin, name="login"),
    path("logout/", views.signout, name="logout"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("addbooks/", views.addbooks, name="addbooks"),
]
