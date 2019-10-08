// import { NativeActions as InstabugNativeActions } from '../instabug/native-actions';
// import { NativeActions as BugReportingNativeActions, NativeIds as BugReportingNativeIds } from './native-actions';
// import { ReactNativeActions } from '../utilities/rn-utility';
// import { DEFAULT_TIMEOUT } from '../utilities/settings';
// import { getId } from '../utilities/native-utility';

// describe('Bug Reporting', () => {
//   beforeEach(async () => {
//     // Reset by relaunching App
//     await device.launchApp({newInstance: true});
//   });

//   it('should report a bug', async () => {
//     // RN App Sanity
//     await ReactNativeActions.checkRnSanity();

//     // Invoke Prompt Options
//     await ReactNativeActions.tapOnInvokeBtn();

//     // Tap on Report a Bug option
//     await InstabugNativeActions.tapOnBugPromptOption();
    
//     // Fill the Email field
//     await BugReportingNativeActions.fillOnBugPromptOption();
    
//     // Tap on Send Bug Report button
//     await BugReportingNativeActions.tapOnSendBugReportBtn();

//     // Expect a "Thank you" popup
//     if (device.getPlatform() === 'ios') {
//       // No AccessibilityIdentifier. Text not working
//       // await waitFor(element(by.text('Thank you'))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
//     } else {
//       await waitFor(element(by.nativeId(getId(BugReportingNativeIds.SUCCESS_POPUP_MSG)))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
//     }
//   });

// });
