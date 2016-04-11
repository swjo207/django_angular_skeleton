from django.conf import settings
from django.conf.urls import url, include, patterns
from django.contrib import admin

#from rest_framework_nested import routers

# from authentication.views import AccountViewSet, LoginView, LogoutView
# from posts.views import AccountPostsViewSet, PostViewSet
from django.views.generic import TemplateView,RedirectView

# router = routers.SimpleRouter()
# router.register(r'accounts', AccountViewSet)
# router.register(r'posts', PostViewSet)

# accounts_router = routers.NestedSimpleRouter(router, r'accounts',lookup='account')
# accounts_router.register(r'posts', AccountPostsViewSet)

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html"), name='index'),
    # rest-auth: login, logout, password,user,registration,facebook(?)
    url(r'^api/v1/auth/', include('rest_auth.urls')),
    url(r'^api/v1/accounts/registration/', include('rest_auth.registration.urls')),
    # allauth
    url(r'^api/v1/accounts/', include('allauth.urls')),
    url(r'^api/v1/accounts/profile/$', RedirectView.as_view(url='/', permanent=True), name='profile-redirect'),
    url(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        TemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password_reset_confirm'),
    url(r'^admin/', admin.site.urls),
]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns += patterns('',
#         url(r'^__debug__/', include(debug_toolbar.urls)),
#         )
