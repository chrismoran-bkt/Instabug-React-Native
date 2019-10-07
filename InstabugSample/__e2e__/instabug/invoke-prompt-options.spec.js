import { getId } from '../utilities/native-utility';
import { NativeActions as InstabugNativeActions, NativeIds as InstabugNativeIds } from './native-actions';
import { NativeActions as BugReportingNativeActions, NativeIds as BugReportingNativeIds } from '../bug-reporting/native-actions';
import { ReactNativeActions } from '../utilities/rn-utility';
import { DEFAULT_TIMEOUT } from '../utilities/settings';

describe('Invoking Prompt Options', () => {
  // it('should show the app main view', async () => {
  //   // RN Sanity
  //   await ReactNativeActions.checkRnSanity();
  // });
  
  // it('should show instabug prompt options when calling Instabug.show()', async () => {
  //   // Action
  //   await ReactNativeActions.tapOnInvokeBtn();
    
  //   // Expectation
  //   await waitFor(element(by.nativeId(getId(InstabugNativeIds.PROMPT_TITLE)))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
  // });
  
  describe('[Restart App]', () => {
    beforeEach(async () => {
      // Reset by relaunching App
      await device.launchApp({newInstance: true});
    });
    
    // it('should show instabug prompt options when tapping the floating button', async () => {
    //   // Prepare
    //   await ReactNativeActions.tapOnEnableFloatingBtn();

    //   // Action
    //   await InstabugNativeActions.tapOnFloatingBtn();
      
    //   // Expectation
    //   await waitFor(element(by.nativeId(getId(InstabugNativeIds.PROMPT_TITLE)))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
    // });

    // it('[iOS] should show instabug prompt options when shaking the device', async () => {
    //   if (device.getPlatform() === 'ios') {
    //     // Action
    //     await device.shake();

    //     // Expectation
    //     await waitFor(element(by.nativeId(getId(InstabugNativeIds.PROMPT_TITLE)))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
    //   }
    // });
  
    it('should report a bug', async () => {
      // RN App Sanity
      await ReactNativeActions.checkRnSanity();

      // Invoke Prompt Options
      await ReactNativeActions.tapOnInvokeBtn();

      // Tap on Report a Bug option
      await InstabugNativeActions.tapOnBugPromptOption();
      
      // Fill the Email field
      await BugReportingNativeActions.fillOnBugPromptOption();
      
      // Tap on Send Bug Report button
      await BugReportingNativeActions.tapOnSendBugReportBtn();

      // Expect a "Thank you" popup
      if (device.getPlatform() === 'ios') {
        // No AccessibilityIdentifier. Text not working
        // await waitFor(element(by.text('Thank you'))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
      } else {
        await waitFor(element(by.nativeId(getId(BugReportingNativeIds.SUCCESS_POPUP_MSG)))).toBeVisible().withTimeout(DEFAULT_TIMEOUT);
      }
    });
  });

});
