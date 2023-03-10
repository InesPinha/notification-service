import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repositorie";

/* simulating bd*/
export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];
    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}