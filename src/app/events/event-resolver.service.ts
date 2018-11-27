import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    //resolvers automatically subscribe to observerable call it gets
    return this.eventService.getEvent(route.params['id']);
  }
}