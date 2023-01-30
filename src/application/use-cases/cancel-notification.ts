import { Notification } from '../entities/notification';
import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notifications-repositorie';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface ICancelNotificationRequest {
    notificationId: string;
}

type ICancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
    constructor(
        private notficationsRepository: NotificationsRepository
    ) { }

    async execute(request: ICancelNotificationRequest): Promise<ICancelNotificationResponse> {
        const { notificationId } = request;
        const notification = await this.notficationsRepository.findById(notificationId);

        if (!notification) throw new NotificationNotFound();

        
    }
}