import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RegisterDto} from '../../dtos/register/RegisterDto';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {RoutePaths} from '../../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient,
              private router: Router,
              private modalService: ModalService) { }

  doRegister(email: string,
      firstName: string,
      lastName: string,
      password: string,
      confirmPassword: string,
      acceptTermsAndConditions: boolean) {
    window.location.href = `${environment.JENKINS_SERVICE_API_URL}/realms/constancy/login-actions/registration?client_id=constancy-java-client`;
  }

  doConfirmRegister(tokenValue: string) {
    this.httpClient.post<RegisterDto>(`${environment.JENKINS_SERVICE_API_URL}/register/confirm`, {tokenValue})
        .subscribe((registerDto) => {
          let message: string;
          let shouldRedirect = false;
          switch (registerDto.status) {
            case 'SUCCESS':
              message = 'Your e-mail has been verified successfully, you may now log in';
              shouldRedirect = true;
              break;
            default:
              message = 'An unknown error has occurred';
          }
          this.modalService.showDefaultModal('Registration Status', message);
          if (shouldRedirect) {
            this.router.navigate([`/${RoutePaths.LOGIN}`]).catch((reason) => window.alert(reason));
          }
        });
  }
}
