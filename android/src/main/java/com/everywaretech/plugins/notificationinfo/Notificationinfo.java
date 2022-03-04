package com.everywaretech.plugins.notificationinfo;

import android.content.Intent;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.PluginResult;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Set;

@CapacitorPlugin
public class Notificationinfo extends Plugin {

    @PluginMethod
    public void getNotificationInfo(PluginCall call) {
        Intent intent = bridge.getActivity().getIntent();

        if(intent.getExtras() != null){
            try {

                PluginResult ret = new PluginResult();
                JSObject data = new JSObject();
                Set<String> keys = intent.getExtras().keySet();
                for (String key : keys) {
                    data.put(key, JSONObject.wrap(intent.getExtras().get(key)));
                }
                ret.put("data",data);
                call.successCallback(ret);

            } catch (Exception e) {
                call.error("Error.");
            }

        } else {

            call.error("Any notification");

        }


    }
}
