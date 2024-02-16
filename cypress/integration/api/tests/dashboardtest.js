// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doDeleteBugTask,doUpdateWithPatchBugTask,doUpdateWithPutBugTask,doGetBugTaskById,doCreateBugTask,doGetBugTaskList,doGetAppetizeBuilds,getAppListById,getFiles,getEdges,getComponent,getUserList,getAuditLogList,getAttributes,doCreateAttributes,getNotification, getAppSupportType, getCertificateList, doGetSkillsList, appTypeList, appTypeUsingId, doCteareApp, searchApp, doCheckAppGeneration, getInvoice, searchInvoice, getAppLogs, getAppLogsUsingLogID } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';

let appname;
let authKey;
let log_id;
let attribute_id;
let app_id;
let bugTask_id;
let app_type;
describe("Dashboard Page", () => {
    const app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doLogin().then((response) => {
            cy.log("login response", response.body.key)
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                appname = response.body.name;
                app_id = response.body.id;
                cy.log("login response", response.body)
                expect(response.status).to.eq(201)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
            })
        })
    })
    
    it('Get Notification Flow', () => {
        getNotification(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    //getAddonsList working here

    it('Search App Flow', () => {
        searchApp(authKey, appname).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Apptype List Flow', () => {
        appTypeList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Appetize Builds Flow', () => {
        doGetAppetizeBuilds(authKey,app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Apptype List By Id Flow', () => {
        getAppListById(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
   

    
    it('Get Skill List Flow', () => {
        doGetSkillsList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Get Bug Task List Flow', () => {
        doGetBugTaskList(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Bug Task List response", response.body)

        })
    })

    it('Create Bug Task  Flow', () => {
        doCreateBugTask(authKey,app_id).then((response) => {
            bugTask_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Bug Task response", response.body)

        })
    })

    it('Get Bug Task Using Id Flow', () => {
        doGetBugTaskById(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Bug Task Using Id response", response.body)

        })
    })

    it('Put Bug Task Using Id Flow', () => {
        doUpdateWithPutBugTask(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Bug Task Using Id response", response.body)

        })
    })
    it('Patch Bug Task Using Id Flow', () => {
        doUpdateWithPatchBugTask(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Bug Task Using Id response", response.body)

        })
    })
    it('Delete Bug Task Flow', () => {
        doDeleteBugTask(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Bug Task response", response.body)

        })
    })

    it('Get Certificate List Flow', () => {
        getCertificateList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get AppSupport Type Flow', () => {
        getAppSupportType(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Check App Generation Flow', () => {
        doCheckAppGeneration(authKey, app_id).then((response) => {
            cy.log("Check App Generationresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get Invoice Flow', () => {
        getInvoice(authKey).then((response) => {
            cy.log("Get Invoice response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    
     it('Get User List Flow', () => {
        getUserList(authKey, app_id).then((response) => {
            cy.log("Get User Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get Component Flow', () => {
        getComponent(authKey, app_id).then((response) => {
            cy.log("Get Component Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
   
    it('Get Edges Flow', () => {
        getFiles(authKey, app_id).then((response) => {
            cy.log("Get Edges Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Get Files Flow', () => {
        getEdges(authKey, app_id).then((response) => {
            cy.log("Get Files Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Search Invoice Flow', () => {
        searchInvoice(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Flow', () => {
        getAppLogs(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            log_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Using Id Flow', () => {
        getAppLogsUsingLogID(authKey, log_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Create Attributes Flow', () => {
        doCreateAttributes(authKey, app_id).then((response) => {
            attribute_id=response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create Attributes response", response.body)
        })
    })

    it('Get Attributes Flow', () => {
        getAttributes(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
        })
    })
    
    it('Get Audit Log List Flow', () => {
        getAuditLogList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
        })
    })
})



