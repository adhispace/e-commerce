import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResponse } from "../../../common/services/IResponse";
import { APP_CONFIG } from "../../../material-shared/material-shared/AppConfig";
import { IAppConfig } from "../../../material-shared/material-shared/IAppConfig";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getPofile() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + "/user");
  }

  updateProfile(userInfo) {
    return this.http.put<IResponse>(
      this.appConfig.apiEndPoint + "/user",
      userInfo
    );
  }
}
