// import { ComponentFixture, fakeAsync, flush, inject, TestBed } from '@angular/core/testing';
// import { MatDialogModule, MatDialog } from '@angular/material/dialog';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { HarnessLoader } from '@angular/cdk/testing';
// import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
// import { Component } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonHarness } from '@angular/material/button/testing';
// import { MatDialogHarness } from '@angular/material/dialog/testing';
// import { MatFormFieldHarness } from '@angular/material/form-field/testing';

// import { LoginBoxDialogModule, LoginBoxDialogService } from './loginbox.module';
// import { LoginBoxDialogComponent, LoginBoxDialogOptions, LoginBoxDialogResult } from './loginbox.dialogcomponent';
// import { InteractivityChecker } from '@angular/cdk/a11y';
// import { MatInputHarness } from '@angular/material/input/testing';

// import { of } from 'rxjs';
// import { Validators } from '@angular/forms';
// import { MediaChange, MediaObserver } from '@polk_county_public_schools/ng-flex-layout';
// import { CoreDialogModule } from '@polk_county_public_schools/ngx-pcps-dialogs/core';

// let mediaObsMock: jasmine.SpyObj<MediaObserver>;

// describe('LoginBoxDialogComponent Tests', () => {
//     let component: TestDialogComponent;
//     let dialog: MatDialog;
//     let fixture: ComponentFixture<TestDialogComponent>;
//     let loader: HarnessLoader;
//     let rootLoader: HarnessLoader;
//     let sizemode: string;
//     const oldConsErr = console.error;

//     const SetSizeMock = (alias: string) => {
//         sizemode = alias;

//         mediaObsMock.asObservable.and.returnValue(
//             of<MediaChange[]>([new MediaChange(true, '', sizemode)])
//         );
//         mediaObsMock.isActive.and.callFake((value) => {
//             return value === sizemode;
//         });
//     };

//     beforeEach(async () => {
//         const _mediaObsMock = jasmine.createSpyObj('MediaObserver', ['asObservable', 'isActive']);

//         await TestBed.configureTestingModule({
//             declarations: [TestDialogComponent, LoginBoxDialogComponent],
//             imports: [MatDialogModule, NoopAnimationsModule, CoreDialogModule, MatButtonModule, LoginBoxDialogModule],
//             providers: [{ provide: MediaObserver, useValue: _mediaObsMock }],
//         })
//             .overrideModule(BrowserDynamicTestingModule, {
//                 set: {
//                     entryComponents: [LoginBoxDialogComponent],
//                 },
//             })
//             .overrideProvider(InteractivityChecker, {
//                 useValue: {
//                     isTabbable: () => true, // Mocks tabbable trap for material, to prevent warnings in tests
//                     isFocusable: () => true, // Mocks isFocusable
//                 },
//             })
//             .compileComponents();

//         mediaObsMock = TestBed.inject(MediaObserver) as jasmine.SpyObj<MediaObserver>;
//     });

//     beforeEach(inject([MatDialog], (d: MatDialog) => {
//         dialog = d;
//         console.error = (...msg: any) => {
//             fail(msg);
//         };

//         fixture = TestBed.createComponent(TestDialogComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//         loader = TestbedHarnessEnvironment.loader(fixture);
//         rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
//         SetSizeMock('lg');

//         jasmine.clock().install();
//     }));

//     afterEach(fakeAsync(() => {
//         flush();

//         dialog.closeAll();
//         SetSizeMock('lg');

//         console.error = oldConsErr;

//         jasmine.clock().uninstall();
//     }));

//     afterAll(() => {
//         dialog.closeAll();
//     });

//     it('should create testing component', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should create the service', async (done) => {
//         const testsvc = new LoginBoxDialogService(dialog, null);
//         expect(testsvc).toBeTruthy();

//         done();
//     });

//     it('should open a dialog with the service', async (done) => {
//         const testsvc = new LoginBoxDialogService(dialog, null);
//         expect(testsvc).toBeTruthy();

//         testsvc.Open({ width: '500px' });
//         fixture.whenRenderingDone().then(async () => {
//             const dlgloader = await rootLoader.getChildLoader('dialog-loginbox-component');
//             expect(dlgloader).toBeTruthy();

//             done();
//         });
//     });

//     it('should default to wide display if screen size service has no info', async (done) => {
//         const testsvc = new LoginBoxDialogService(dialog, null as IScreenSizeService);
//         expect(testsvc).toBeTruthy();
//         expect(testsvc.smallMediaSize).toBeFalse();

//         done();
//     });

//     it('should default to wide display if screen size service reports no screen size value', async (done) => {
//         const fakeSvc = new IScreenSizeService();
//         spyOnProperty(fakeSvc, 'ScreenSize', 'get').and.returnValue(null);

//         const testsvc = new LoginBoxDialogService(dialog, fakeSvc);
//         expect(testsvc).toBeTruthy();
//         expect(testsvc.smallMediaSize).toBeFalse();

//         done();
//     });

//     it('should default to wide display if screen size service reports no small display value', async (done) => {
//         const fakeSvc = new IScreenSizeService();
//         spyOnProperty(fakeSvc, 'ScreenSize', 'get').and.returnValue({ IsSmallDisplay: null });

//         const testsvc = new LoginBoxDialogService(dialog, fakeSvc);
//         expect(testsvc).toBeTruthy();
//         expect(testsvc.smallMediaSize).toBeFalse();

//         done();
//     });

//     it('should close open dialogs with the service', async (done) => {
//         const testsvc = new LoginBoxDialogService(dialog, null);
//         expect(testsvc).toBeTruthy();

//         testsvc.Open({ width: '500px' });
//         fixture.whenRenderingDone().then(async () => {
//             const dlgloader = await rootLoader.getChildLoader('dialog-loginbox-component');
//             expect(dlgloader).toBeTruthy();

//             testsvc.CloseAllDialogs();
//             fixture.whenRenderingDone().then(async () => {
//                 try {
//                     const dlg2 = await rootLoader.getChildLoader('dialog-loginbox-component');
//                     fail('Found a dialog when none was expected.');
//                 } catch (e1) {
//                     expect(e1.message).toContain('Failed to find');
//                 }

//                 done();
//             });
//         });
//     });

//     it('should launch the dialog with a click of the button', async () => {
//         dialog
//             .open(LoginBoxDialogComponent, {
//                 width: '500px',
//             })
//             .afterClosed()
//             .subscribe();

//         const dlgloader = await rootLoader.getAllHarnesses(MatDialogHarness);

//         expect(dlgloader.length).toEqual(1);
//     });

//     it('should display provided OK button text', async () => {
//         dialog
//             .open(LoginBoxDialogComponent, {
//                 width: '500px',
//                 data: {
//                     OKText: 'OK!',
//                 },
//             })
//             .afterClosed()
//             .subscribe();

//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         const okbtn = await dlgloader.getHarness(MatButtonHarness.with({ selector: '.okbtn' }));
//         expect(okbtn).toBeTruthy();
//         expect(await okbtn.getText()).toEqual('OK!');
//     });

//     it('should display provided Cancel button text', async () => {
//         dialog
//             .open(LoginBoxDialogComponent, {
//                 width: '500px',
//                 data: {
//                     CancelText: 'Cancel!',
//                 },
//             })
//             .afterClosed()
//             .subscribe();

//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         const cancelbtn = await dlgloader.getHarness(MatButtonHarness.with({ selector: '.cancelbtn' }));
//         expect(cancelbtn).toBeTruthy();
//         expect(await cancelbtn.getText()).toEqual('Cancel!');
//     });

//     it('should display provided title and message text', async () => {
//         dialog
//             .open(LoginBoxDialogComponent, {
//                 width: '500px',
//                 data: { TitleText: 'Title text', MessageText: 'Message text' },
//             })
//             .afterClosed()
//             .subscribe();

//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         const titleldr = await dlgloader.getChildLoader('.dialog-title');
//         expect(titleldr).toBeTruthy();
//         expect(await (titleldr as TestbedHarnessEnvironment).rootElement.text()).toEqual('Title text');

//         const msgldr = await dlgloader.getChildLoader('.dialog-message');
//         expect(msgldr).toBeTruthy();
//         expect(await (msgldr as TestbedHarnessEnvironment).rootElement.text()).toEqual('Message text');
//     });

//     it('should require cancelling twice to close dialog with cancel', async () => {
//         const dlgref = dialog.open(LoginBoxDialogComponent, {
//             width: '500px',
//         });

//         const rtnval = dlgref.afterClosed().toPromise();

//         const dlg = await rootLoader.getAllHarnesses(MatDialogHarness);
//         expect(dlg.length).toEqual(1);

//         // Get dialog container
//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         // Verify that the cancel warning text isn't on display.
//         try {
//             const cancelwarn = await dlgloader.getChildLoader('div.cancelwarning');
//             fail('Found cancelwarning when not expected.');
//         } catch (e1) {
//             expect(e1.message.indexOf('Failed to find element matching')).toBeGreaterThanOrEqual(0);
//         }

//         // Now, find the cancel button and click it.
//         const cancelbtn = await dlgloader.getHarness(MatButtonHarness.with({ text: 'Cancel' }));
//         expect(cancelbtn).toBeTruthy();
//         await cancelbtn.click();

//         // Now verify the cancel warning text is on display.
//         const cancelwarn2 = await dlgloader.getChildLoader('div.cancelwarning');
//         expect(cancelwarn2).toBeTruthy();

//         // Click the cancel button again.
//         await cancelbtn.click();

//         expect(await rtnval).toBeNull();
//     });

//     it('should have OK button disabled when form is invalid', async () => {
//         const dlgref = dialog.open(LoginBoxDialogComponent, {
//             width: '500px',
//         });

//         const rtnval = dlgref.afterClosed().toPromise();

//         const dlg = await rootLoader.getAllHarnesses(MatDialogHarness);
//         expect(dlg.length).toEqual(1);

//         // Get dialog container
//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         // Find the ok button.
//         const okbtn = await dlgloader.getHarness(MatButtonHarness.with({ text: 'OK' }));
//         expect(okbtn).toBeTruthy();

//         jasmine.clock().tick(1000);

//         expect(await okbtn.isDisabled()).toBeTrue();
//     });

//     it('should have OK button disabled when form is invalid - added validator', async () => {
//         const dlgref = dialog.open(LoginBoxDialogComponent, {
//             width: '500px',
//             data: {
//                 Username: 'some.person',
//                 Validators: [Validators.maxLength(5)],
//             },
//         });

//         const rtnval = dlgref.afterClosed().toPromise();

//         const dlg = await rootLoader.getAllHarnesses(MatDialogHarness);
//         expect(dlg.length).toEqual(1);

//         // Get dialog container
//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         // Find the ok button.
//         const okbtn = await dlgloader.getHarness(MatButtonHarness.with({ text: 'OK' }));
//         expect(okbtn).toBeTruthy();

//         jasmine.clock().tick(1000);

//         expect(await okbtn.isDisabled()).toBeTrue();
//     });

//     it('should use a password input box for the password field', async () => {
//         const dlgref = dialog.open(LoginBoxDialogComponent, {
//             width: '500px',
//             data: {
//                 Username: 'some.person',
//             },
//         });

//         const rtnval = dlgref.afterClosed().toPromise();

//         const dlg = await rootLoader.getAllHarnesses(MatDialogHarness);
//         expect(dlg.length).toEqual(1);

//         // Get dialog container
//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         // Find the formfield for password
//         const allforms = await dlgloader.getAllHarnesses(MatFormFieldHarness);
//         expect(allforms.length).toEqual(2);
//         const formctrl = await allforms[1].getControl(MatInputHarness);
//         expect(formctrl).toBeTruthy();
//         expect(await formctrl.getType()).toEqual('password');
//     });

//     it('should have username prefilled when called', async () => {
//         const dlgref = dialog.open(LoginBoxDialogComponent, {
//             width: '500px',
//             data: {
//                 Username: 'some.person',
//             },
//         });

//         const rtnval = dlgref.afterClosed().toPromise();

//         const dlg = await rootLoader.getAllHarnesses(MatDialogHarness);
//         expect(dlg.length).toEqual(1);

//         // Get dialog container
//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         // Find the formfield for username
//         const userform = await dlgloader.getHarness(MatFormFieldHarness);
//         expect(userform).toBeTruthy();
//         const formctrl = await userform.getControl(MatInputHarness);
//         expect(formctrl).toBeTruthy();
//         expect(await formctrl.getValue()).toEqual('some.person');
//     });

//     it('should return username and password when OK clicked', async () => {
//         const dlgref = dialog.open(LoginBoxDialogComponent, {
//             width: '500px',
//             data: {
//                 Username: 'some.person',
//             },
//         });

//         const rtnval = dlgref.afterClosed().toPromise();

//         const dlg = await rootLoader.getAllHarnesses(MatDialogHarness);
//         expect(dlg.length).toEqual(1);

//         // Get dialog container
//         const dlgloader = await rootLoader.getChildLoader('.mat-dialog-container');
//         expect(dlgloader).toBeTruthy();

//         // Find the formfield for password
//         const allforms = await dlgloader.getAllHarnesses(MatFormFieldHarness);
//         expect(allforms.length).toEqual(2);
//         const formctrl = await allforms[1].getControl(MatInputHarness);
//         expect(formctrl).toBeTruthy();

//         // Set the password field value
//         await formctrl.setValue('pa$$word');

//         // Find the OK btn.
//         const okbtn = await dlgloader.getHarness(MatButtonHarness.with({ text: 'OK' }));
//         expect(okbtn).toBeTruthy();

//         // Click it.
//         await okbtn.click();

//         // Check result.
//         expect(await rtnval).toEqual({
//             Username: 'some.person',
//             Password: 'pa$$word',
//         });
//     });
// });

// @Component({
//     selector: 'app-test-coredialog-component',
//     styles: [
//         `
//             :host {
//                 display: block;
//                 position: relative;
//                 box-sizing: border-box;
//             }
//         `,
//     ],
//     template: ` <button mat-button (click)="ShowDialog()">Click</button> `,
// })
// export class TestDialogComponent {
//     constructor(public dialog: MatDialog) {}

//     ShowDialog() {
//         const dialogRef = this.dialog.open(LoginBoxDialogComponent, {
//             width: '600px',
//             data: {
//                 OKText: 'OK',
//                 CancelText: 'Cancel',
//                 MessageText: 'Test message here.',
//                 TitleText: 'Test Title',
//             } as LoginBoxDialogOptions,
//         });

//         dialogRef.afterClosed().subscribe((res) => {
//             console.log('Test Dialog Completed: ', res);
//         });
//     }
// }
