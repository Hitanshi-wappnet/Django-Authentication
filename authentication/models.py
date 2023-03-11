from django.db import models
from django.contrib.auth.models import User


class BookDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    bookname = models.CharField(max_length=30, default=None)
    authorname = models.CharField(max_length=30, default=None)
    bookimage = models.ImageField(upload_to='books', default="", null=True,
                                  blank=True)