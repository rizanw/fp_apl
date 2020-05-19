import { controller, interfaces, httpGet } from "inversify-express-utils";
import { GetReadyServicesService } from "src/application/service/GetReadyServicesService";
import { Request, Response } from "express";
import User from "src/domain/models/User";
import { sendSuccessResponse } from "../utils/response";
import { GetBacklogServicesService } from "src/application/service/GetBacklogServicesService";
import { GetFinishedServicesService } from "src/application/service/GetFinishedServicesService";
import { GetProcessedServicesService } from "src/application/service/GetProcessedServicesService";
import { Role } from "src/domain/models/Role";
import role from "src/ui/http/express/middlewares/role";

@controller("/services")
export class ServiceController implements interfaces.Controller {
  constructor(
    protected readonly getReadyServicesService: GetReadyServicesService,
    protected readonly getProcessedServicesService: GetProcessedServicesService,
    protected readonly getFinishedServicesService: GetFinishedServicesService,
    protected readonly getBacklogServicesService: GetBacklogServicesService
  ) {}

  @httpGet("/ready", role(Role.company))
  public async getReady(req: Request, res: Response) {
    const user = req.user as User;

    if (!user) {
      throw new Error("Unauthenticated");
    }

    const services = await this.getReadyServicesService.execute(user);

    sendSuccessResponse(res, "", services);
  }

  @httpGet("/process", role(Role.company))
  public async getProcess(req: Request, res: Response) {
    const user = req.user as User;

    if (!user) {
      throw new Error("Unauthenticated");
    }

    const services = await this.getProcessedServicesService.execute(user);

    sendSuccessResponse(res, "", services);
  }

  @httpGet("/finish", role(Role.company))
  public async getFinish(req: Request, res: Response) {
    const user = req.user as User;

    if (!user) {
      throw new Error("Unauthenticated");
    }

    const services = await this.getFinishedServicesService.execute(user);

    sendSuccessResponse(res, "", services);
  }

  @httpGet("/backlog", role(Role.company))
  public async getBacklog(req: Request, res: Response) {
    const user = req.user as User;

    if (!user) {
      throw new Error("Unauthenticated");
    }

    const services = await this.getBacklogServicesService.execute(user);

    sendSuccessResponse(res, "", services);
  }
}