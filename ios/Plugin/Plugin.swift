import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(Notificationinfo)
public class Notificationinfo: CAPPlugin {

    let shared = Shared.store
    
    @objc func getNotificationInfo(_ call: CAPPluginCall) {
        if(shared.hasData) {
            shared.hasData = false
            call.resolve(["data": shared.data])
        } else {
            call.reject("Error")
        }
    }
    public override func load() {
        let nc = NotificationCenter.default
            nc.addObserver(self, selector: #selector(eval), name: Notification.Name("triggerNotifications"), object: nil)
    }

    @objc open func eval(){
        self.bridge?.eval(js: "window.dispatchEvent(new Event('notificationRecieved'))");
    }
}
