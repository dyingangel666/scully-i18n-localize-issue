import {Injectable} from '@angular/core';
import {AppConstants} from '../app.constants';

/**
 * AppSettingsService (singleton)
 *
 * This is a shared service which is used to share important app data and some global used functions between components
 */
@Injectable({
  providedIn: 'root',
})
export class AppSettingsService
{
  /*************************************************************************************************************
   * CONSTANTS
   *************************************************************************************************************/

  readonly constants = AppConstants.data;

  /*************************************************************************************************************
   * VARS
   *************************************************************************************************************/


  /*************************************************************************************************************
   * CTOR WITH DEPENDENCY INJECTION
   *************************************************************************************************************/

  constructor()
  {
  }

  /*************************************************************************************************************
   * PUBLIC FUNCTIONS
   *************************************************************************************************************/

  /**
   * Switches the language project
   */
  public redirectToLanguage(oldLang: string, newLang: string)
  {
    const currentUrl = window.location.href;
    const redirectUrl = currentUrl.replace(`/${oldLang}/`, `/${newLang}/`);

    // Redirect to correct language
    window.location.replace(redirectUrl);
  }
}
