import { NgModule } from '@angular/core';
import { EditPrivacySettingsComponent } from 'app/ui/personal/privacy-settings/edit-privacy-settings.component';
import { ViewPrivacySettingsComponent } from 'app/ui/personal/privacy-settings/view-privacy-settings.component';
import { UiSharedModule } from 'app/ui/shared/ui-shared.module';
import { ViewAgreementsHistoryComponent } from 'app/ui/users/agreements/view-agreements-history.component';
import { ViewUserAgreementsComponent } from 'app/ui/users/agreements/view-user-agreements.component';
import { SearchUserAlertsComponent } from 'app/ui/users/alerts/search-user-alerts.component';
import { BrokerFormComponent } from 'app/ui/users/brokering/broker-form.component';
import { ListUserBrokersComponent } from 'app/ui/users/brokering/list-user-brokers.component';
import { ViewBrokerHistoryComponent } from 'app/ui/users/brokering/view-broker-history.component';
import { SearchConnectedComponent } from 'app/ui/users/connected/search-connected.component';
import { EditDocumentComponent } from 'app/ui/users/documents/edit-document.component';
import { ListDocumentsComponent } from 'app/ui/users/documents/list-documents.component';
import { ProcessDynamicDocumentComponent } from 'app/ui/users/documents/process-dynamic-document.component';
import { SearchDocumentsComponent } from 'app/ui/users/documents/search-documents.component';
import { ViewDocumentComponent } from 'app/ui/users/documents/view-document.component';
import { ViewUserGroupHistoryComponent } from 'app/ui/users/group-membership/view-user-group-history.component';
import { ViewUserGroupComponent } from 'app/ui/users/group-membership/view-user-group.component';
import { UserIdentityProvidersComponent } from 'app/ui/users/identity-providers/user-identity-providers.component';
import { NotificationSettingsFormComponent } from 'app/ui/users/notification-settings/notification-settings-form.component';
import { ListOperatorGroupsComponent } from 'app/ui/users/operator-groups/list-operator-groups.component';
import { OperatorGroupFormComponent } from 'app/ui/users/operator-groups/operator-group-form.component';
import { ViewOperatorGroupComponent } from 'app/ui/users/operator-groups/view-operator-group.component';
import { OperatorRegistrationComponent } from 'app/ui/users/operators/operator-registration.component';
import { SearchUserOperatorsComponent } from 'app/ui/users/operators/search-user-operators.component';
import { ChangePasswordDialogComponent } from 'app/ui/users/passwords/change-password-dialog.component';
import { ManagePasswordsComponent } from 'app/ui/users/passwords/manage-passwords.component';
import { ListProductAssignmentComponent } from 'app/ui/users/products/list-product-assignment.component';
import { ViewProductAssignmentHistoryComponent } from 'app/ui/users/products/view-product-assignment-history.component';
import { EditProfileComponent } from 'app/ui/users/profile/edit-profile.component';
import { ValidateEmailChangeComponent } from 'app/ui/users/profile/validate-email-change.component';
import { VerifyPhoneComponent } from 'app/ui/users/profile/verify-phone.component';
import { ViewProfileComponent } from 'app/ui/users/profile/view-profile.component';
import { SearchReferencesComponent } from 'app/ui/users/references/search-references.component';
import { SetReferenceComponent } from 'app/ui/users/references/set-reference.component';
import { ViewReferenceComponent } from 'app/ui/users/references/view-reference.component';
import { RegistrationStepConfirmComponent } from 'app/ui/users/registration/registration-step-confirm.component';
import { RegistrationStepDoneComponent } from 'app/ui/users/registration/registration-step-done.component';
import { RegistrationStepFieldsComponent } from 'app/ui/users/registration/registration-step-fields.component';
import { RegistrationStepGroupComponent } from 'app/ui/users/registration/registration-step-group.component';
import { RegistrationStepIdPComponent } from 'app/ui/users/registration/registration-step-idp.component';
import { UserRegistrationComponent } from 'app/ui/users/registration/user-registration.component';
import { ValidateRegistrationComponent } from 'app/ui/users/registration/validate-registration.component';
import { AddContactDialogComponent } from 'app/ui/users/search/add-contact-dialog.component';
import { ContactListComponent } from 'app/ui/users/search/contact-list.component';
import { SearchUsersComponent } from 'app/ui/users/search/search-users.component';
import { UsersResultsComponent } from 'app/ui/users/search/users-results.component';
import { ViewUserStatusHistoryComponent } from 'app/ui/users/status/view-user-status-history.component';
import { ViewUserStatusComponent } from 'app/ui/users/status/view-user-status.component';
import { AssignTokenComponent } from 'app/ui/users/tokens/assign-token.component';
import { CreateTokenComponent } from 'app/ui/users/tokens/create-token.component';
import { ListTokenComponent } from 'app/ui/users/tokens/list-token.component';
import { SearchTokenComponent } from 'app/ui/users/tokens/search-token.component';
import { ViewTokenComponent } from 'app/ui/users/tokens/view-token.component';
import { UsersRoutingModule } from 'app/ui/users/users-routing.module';

/**
 * Users module
 */
@NgModule({
  imports: [
    UsersRoutingModule,
    UiSharedModule,
  ],
  exports: [],
  declarations: [
    SearchConnectedComponent,
    SearchUsersComponent,
    UsersResultsComponent,
    ContactListComponent,
    AddContactDialogComponent,

    ViewProfileComponent,
    EditProfileComponent,
    VerifyPhoneComponent,
    ValidateEmailChangeComponent,

    UserRegistrationComponent,
    RegistrationStepGroupComponent,
    RegistrationStepIdPComponent,
    RegistrationStepFieldsComponent,
    RegistrationStepConfirmComponent,
    RegistrationStepDoneComponent,
    ValidateRegistrationComponent,

    SearchUserOperatorsComponent,
    OperatorRegistrationComponent,
    ListOperatorGroupsComponent,
    ViewOperatorGroupComponent,
    OperatorGroupFormComponent,

    ViewUserStatusComponent,
    ViewUserStatusHistoryComponent,

    SearchUserAlertsComponent,

    ViewUserGroupComponent,
    ViewUserGroupHistoryComponent,

    ViewUserAgreementsComponent,
    ViewAgreementsHistoryComponent,

    ListUserBrokersComponent,
    BrokerFormComponent,
    ViewBrokerHistoryComponent,

    ManagePasswordsComponent,
    ChangePasswordDialogComponent,

    UserIdentityProvidersComponent,

    NotificationSettingsFormComponent,

    ViewDocumentComponent,
    EditDocumentComponent,
    ProcessDynamicDocumentComponent,
    ListDocumentsComponent,
    SearchDocumentsComponent,

    AssignTokenComponent,
    CreateTokenComponent,
    ViewTokenComponent,
    ListTokenComponent,
    SearchTokenComponent,

    ListProductAssignmentComponent,
    ViewProductAssignmentHistoryComponent,

    EditPrivacySettingsComponent,
    ViewPrivacySettingsComponent,

    SearchReferencesComponent,
    ViewReferenceComponent,
    SetReferenceComponent
  ],
  entryComponents: [
    VerifyPhoneComponent,
    AddContactDialogComponent,
    ChangePasswordDialogComponent,
  ],
})
export class UsersModule {
}
