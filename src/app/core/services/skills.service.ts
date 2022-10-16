import { SkillResponse } from './../dtos/skills/skill.list.response';
import { Skill } from './../dtos/skills/skill';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>(null);

  constructor(private http: HttpClient) {}

  public getSkills(): Observable<SkillResponse> {
    return this.http.get<SkillResponse>('skills');
  }

  public getCurrentSkills(): Observable<Skill[]> {
    return this.skills;
  }

  public setCurrentSkills(skills: Skill[]) {
    this.skills.next(skills);
  }
}
