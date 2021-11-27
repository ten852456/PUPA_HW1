from django.urls import include, path
from bookdata import views
from django.conf.urls import url



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^books/$',views.bookApi),
    url(r'^books/([0-9]+)$',views.bookApi),
]