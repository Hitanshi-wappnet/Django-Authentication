from django.contrib import admin
from authentication.models import BookDetails


# Register your models here.
@admin.register(BookDetails)
class BookdetailsAdmin(admin.ModelAdmin):
    list_display = ['bookname']
