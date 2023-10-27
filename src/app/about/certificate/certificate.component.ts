import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  droneRacing: boolean = false;
  droneBuild: boolean = false;
  arduinoTraining: boolean = false;
  iccCertificate: boolean = false;

  certificates = [
    {
      image: './../../../assets/img/droneRacing.JPG',
      title: 'Kathford Kathfest Drone Racing Participant',
      description: 'I participated in Kathfest for Drone Racing organized by Kathford, and was awarded this certificate for my participation.',
      buttonShow: 'showDroneRacingCertificate',
      imageShow: this.droneRacing
    }, {
      image: './../../../assets/img/droneBuild.JPG',
      title: 'Kathfest Drone Build and Fly Completion',
      description: 'I completed the drone build and fly program offered by Kathfest, and was awarded this certificate for my achievement.',
      buttonShow: 'showDroneBuildCertificate',
      imageShow: this.droneBuild
    }, {
      image: './../../../assets/img/audrinoTraining.JPG',
      title: 'Basic Arduino Training Workshop Completion',
      description: 'I participated in the three-day workshop on Basic Arduino Training organized by ROBOKATH and supported by Kathford FOSS Community, and was awarded this certificate for my completion of the program.',
      buttonShow: 'showArduinoCertificate',
      imageShow: this.arduinoTraining
    }, {
      image: './../../../assets/img/iccCertificate.JPG',
      title: 'Classical Hindustani Tabla Course Completion',
      description: 'I completed a one-year classroom course on Classical Hindustani Tabla at the Indian Cultural Center during the 2016-2017 academic year, and was awarded this certificate for my achievement.',
      buttonShow: 'showICCCertificate',
      imageShow: this.iccCertificate
    }
  ]


  showDroneRacingCertificate() {
    const btn = document.getElementById('droneRacing');
    btn?.classList.toggle('hidden');
    this.droneRacing = !this.droneRacing;
  }

  showDroneBuildCertificate() {
    const btn = document.getElementById('droneBuild');
    btn?.classList.toggle('hidden');
    this.droneBuild = !this.droneBuild;
  }

  showArduinoCertificate() {
    const btn = document.getElementById('arduinoTraining');
    btn?.classList.toggle('hidden');
    this.arduinoTraining = !this.arduinoTraining;
  }

  showICCCertificate() {
    const btn = document.getElementById('iccCertificate');
    btn?.classList.toggle('hidden');
    this.iccCertificate = !this.iccCertificate;
  }

  showImage(certificate: any) {
    certificate.imageShow = !certificate.imageShow
  }
}
