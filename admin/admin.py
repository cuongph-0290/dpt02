from django.contrib import admin

urlpatterns = [
  path('dashboard', views.index, name='admin-dashboard')
]
