import { SkillsService } from './../../core/services/skills.service';
import { Skill } from './../../core/dtos/skills/skill';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit, AfterViewInit {
  public hide: boolean;
  public skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getCurrentSkills().subscribe((skills) => {
      if (skills === null) {
        this.skillsService.getSkills().subscribe((result) => {
          this.skillsService.setCurrentSkills(result.skills);
        });
      } else {
        this.skills = skills.sort(
          (a, b) => a.displayPriority - b.displayPriority
        );
      }
    });
    this.hide = PreloaderComponent.flag;
  }

  ngAfterViewInit(): void {
    const delayTime: number = this.hide ? 1000 : 2000;
    setTimeout(() => {
      const allProgress = document.getElementsByClassName('animated-progress');
      for (let index = 0; index < allProgress.length; index++) {
        const progress: any = allProgress[index];
        const percent = progress.getAttribute('data-progress');
        progress.style.width = percent + '%';
      }
    }, delayTime);
  }
}
