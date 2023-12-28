import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skill } from '../dtos/skills/skill';
import { HttpClient } from '@angular/common/http';
import { SkillResponse } from '../dtos/skills/skill.list.response';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills: BehaviorSubject<Skill[] | null> = new BehaviorSubject<
    Skill[] | null
  >(null);

  constructor(private http: HttpClient) {}

  public getSkills(): Observable<SkillResponse> {
    return this.http.get<SkillResponse>('skills');
  }

  public getCurrentSkills(): Observable<Skill[] | null> {
    return this.skills;
  }

  public setCurrentSkills(skills: Skill[]) {
    this.skills.next(skills);
  }
}
