from django.urls import path
from .views import CourseListCreateAPIView, CourseRetrieveUpdateDestroyAPIView, UserListCreateAPIView, UserRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('courses/', CourseListCreateAPIView.as_view(), name='course_list_create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyAPIView.as_view(), name='course_detail'),
    path('users/', UserListCreateAPIView.as_view(), name='user_list_create'),
    path('users/<int:pk>/', UserRetrieveUpdateDestroyAPIView.as_view(), name='user_detail'),
]
