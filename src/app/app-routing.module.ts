import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/pages/landing-page/landing-page.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {
  CreateOrganizationComponent,
} from './components/pages/organizations/create-organization/create-organization.component';
import {
  ManageOrganizationsComponent,
} from './components/pages/organizations/manage-organizations/manage-organizations.component';
import {
  OrganizationDashboardComponent,
} from './components/pages/organizations/per-organization/organization-dashboard/organization-dashboard.component';
import {ServerErrorComponent} from './components/pages/error/server-error/server-error.component';
import {ManageAccountComponent} from './components/pages/manage-account/manage-account.component';
import {ErrorNotFoundComponent} from './components/pages/error/error-not-found/error-not-found.component';
import {
  OrganizationPageComponent,
} from './components/pages/organizations/per-organization/organization-page/organization-page.component';
import {
  CreateProductComponent,
} from './components/pages/organizations/per-organization/create-product/create-product.component';
import {
  KeycloakLoginSuccessComponent,
} from './components/pages/keycloak-login-success/keycloak-login-success.component';

export enum RoutePaths {
  /* ANONYMOUS ROUTES */
  LANDING_PAGE = '',
  /* ERROR ROUTES */
  SERVER_ERROR = 'error/server-error',
  ERROR_NOT_FOUND = 'error/not-found',
  /* LOGIN ROUTES */
  KEYCLOAK_LOGIN_SUCCESS = 'keycloak-login-success',
  /* DASHBOARD ROUTES */
  DASHBOARD = 'dashboard',
  /* ACCOUNT ROUTES */
  ACCOUNT_MANAGE = 'account/manage',
  /* ORGANIZATION ROUTES */
  ORGANIZATIONS_CREATE = 'organizations/create',
  ORGANIZATIONS_MANAGE = 'organizations/manage',
  ORGANIZATIONS_DASHBOARD_ID = 'organizations/dashboard/:organizationId',
  ORGANIZATIONS_PAGE_ID = 'organizations/:organizationId',
  /* PRODUCT ROUTES */
  ORGANIZATIONS_PRODUCT_CREATE = 'organizations/dashboard/:organizationId/create-product',
}

const routes: Routes = [
  /* ANONYMOUS ROUTES */
  {path: RoutePaths.LANDING_PAGE, component: LandingPageComponent},
  /* ERROR ROUTES */
  {path: RoutePaths.SERVER_ERROR, component: ServerErrorComponent},
  {path: RoutePaths.ERROR_NOT_FOUND, component: ErrorNotFoundComponent},
  /* LOGIN ROUTES */
  {path: RoutePaths.KEYCLOAK_LOGIN_SUCCESS, component: KeycloakLoginSuccessComponent},
  /* DASHBOARD ROUTES */
  {path: RoutePaths.DASHBOARD, component: DashboardComponent, canActivate: [AuthGuard]},
  /* ACCOUNT ROUTES */
  {path: RoutePaths.ACCOUNT_MANAGE, component: ManageAccountComponent, canActivate: [AuthGuard]},
  /* ORGANIZATION ROUTES */
  {path: RoutePaths.ORGANIZATIONS_CREATE, component: CreateOrganizationComponent, canActivate: [AuthGuard]},
  {path: RoutePaths.ORGANIZATIONS_MANAGE, component: ManageOrganizationsComponent, canActivate: [AuthGuard]},
  {path: RoutePaths.ORGANIZATIONS_DASHBOARD_ID, component: OrganizationDashboardComponent, canActivate: [AuthGuard]},
  {path: RoutePaths.ORGANIZATIONS_PAGE_ID, component: OrganizationPageComponent},
  /* PRODUCT ROUTES */
  {path: RoutePaths.ORGANIZATIONS_PRODUCT_CREATE, component: CreateProductComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/**
 * Default generated app routing module.
 */
export class AppRoutingModule { }