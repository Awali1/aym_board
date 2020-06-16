import axios from "axios";

import { showLoading, hideLoading } from "./loading";

class HttpRequest {
    getInsideConfig() {
        const config = {
            headers: {
                "X-Auth-Token": localStorage.authToken
            }
        };
        return config;
    }

    interceptors(instance, options) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // TODO...
            if (options.showLoading) showLoading();
            return config;
        });

        // 响应拦截
        instance.interceptors.response.use(
            res => {
                if (options.showLoading) hideLoading();

                const { data } = res;
                return data;
            },
            error => {
                console.log("ajax error!!!");
                console.log(error);

                if (options.showLoading) hideLoading();

                // 判断是否权限异常
                // if(error.response.status == 403){
                //     // TODO...
                // }
                if (error.response.status == 401) {
                    alert('登陆超时，请重新登陆!')
                    window.location.href=''
                }
            }
        );
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options);
        return instance(options);
    }
}

const http = new HttpRequest();
export default http;
