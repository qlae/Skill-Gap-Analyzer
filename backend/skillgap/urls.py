from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Backend is running. Visit /api/upload/ to upload files.")  # This is correct

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('upload.urls')),  # This is correct
    path('', home),
]
