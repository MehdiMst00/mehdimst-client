import { Component, OnInit } from '@angular/core';
import { Skill } from '../../core/dtos/skills/skill';
import { PreloaderService } from '../../core/services/preloader.service';
import { SkillsService } from '../../core/services/skills.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {
  public hide: boolean = false;
  public skills: Skill[] = [];

  constructor(
    private readonly skillsService: SkillsService,
    private readonly preloaderService: PreloaderService
  ) {}

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
    let delayTime: number = this.hide ? 1000 : 2000;
    this.skillsService.getCurrentSkills().subscribe((skills) => {
      if (skills === null) {
        delayTime = 1;
        this.skillsService.getSkills().subscribe((result) => {
          this.skillsService.setCurrentSkills(result.skills);
        });
      } else {
        this.skills = skills;
      }

      setTimeout(() => {
        const allProgress =
          document.getElementsByClassName('animated-progress');
        for (let index = 0; index < allProgress.length; index++) {
          const progress: any = allProgress[index];
          const percent = progress.getAttribute('data-progress');
          progress.style.width = percent + '%';
        }
      }, delayTime);
    });
  }
}
