from django.urls import path, include

urlpatterns = [
    path('api/', include('apps.projects.urls')),
    path('dashboard/', include('apps.dashboard.urls')),
    path('admin/', include('apps.admin.urls')),
]
