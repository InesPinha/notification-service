import { Content } from './content';

describe('Notification content', () => {

    it('should be able to createa notification content', () => {
        const content = new Content('This a test notification');
        expect(content).toBeTruthy();
    });

    it('should not be able to create a notification content whith less than 5 caracters', () => {
        expect(() => new Content('oi')).toThrow();
    });

    it('should not be able to create a notification content whith more than 240 caracters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    });
}); 