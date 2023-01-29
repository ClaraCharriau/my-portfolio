import { Component } from '@angular/core';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.css']
})
export class DownloadCvComponent {

  downloadPDF() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.setAttribute('href', 'assets/uploads/charriau-cv.pdf');
    link.setAttribute('download', `charriau-cv.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
