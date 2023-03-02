import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  droneRacing:boolean = false;
  droneBuild:boolean = false;
  arduinoTraining:boolean = false;
  iccCertificate:boolean = false;

  showDroneRacingCertificate(){
    console.log('hello button clicked');
    const btn = document.getElementById('droneRacing');
    btn?.classList.toggle('hidden');
    this.droneRacing = !this.droneRacing;
  }

  showDroneBuildCertificate(){
    const btn = document.getElementById('droneBuild');
    btn?.classList.toggle('hidden');
    this.droneBuild = !this.droneBuild;
  }

  showArduinoCertificate(){
    const btn = document.getElementById('arduinoTraining');
    btn?.classList.toggle('hidden');
    this.arduinoTraining = !this.arduinoTraining;
  }

  showICCCertificate(){
    const btn = document.getElementById('iccCertificate');
    btn?.classList.toggle('hidden');
    this.iccCertificate = !this.iccCertificate;
  }
}
