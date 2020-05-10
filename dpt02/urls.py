from django.urls import path, include

urlpatterns = [
    path('dashboard/', include('apps.dashboard.urls')),
    path('admin/', include('apps.admin.urls')),
]
