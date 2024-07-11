from django.contrib import admin
from django.urls import path,include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # ----> here we are able to make roots and other things 
    
    path('api/user/register/',CreateUserView.as_view(),name='register'),
    path('api/token/',TokenObtainPairView.as_view(),name='get_token'),
    path('api/token/refresh/',TokenRefreshView.as_view(),name='refresh'),
    path('api-auth/',include('rest_framework.urls')),
    # the line means if above all url not work and we are in /api then 
    # check in the urls that in over api app or folder that we declare
    
    path('api/',include('api.urls')),
]


