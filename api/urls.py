from django.urls import path
from . import views


urlpatterns = [
    path('routes/', views.get_routes, name='routes'),
    path('notes/', views.get_notes, name='notes'),
    path('notes/create/', views.create_note, name='create-note'),
    path('notes/<int:pk>/update/', views.update_note, name='update-note'),
    path('notes/<int:pk>/delete/', views.delete_note, name='delete-note'),
    path('notes/<str:pk>/', views.get_note, name='note'),
]
