/**
 * AppConstants
 *
 * Globally used constants which are defined in a central place here to make it reusable
 */
export class AppConstants
{
  public static data = {

    /**
     * BASE TITLE USED FOR THE <title>'s
     */
    BASE_TITLE: 'softgarden marketplace',

    /**
     * DEFINES THE SUPPORTED LANGUAGES
     */
    SUPPORTED_LANGUAGES: ['de', 'en'],

    /**
     * DEFINES THE DEFAULT TEMPLATE LANGUAGE
     */
    DEFAULT_LANGUAGE: 'de',

    /**
     * DEFINES THE APP ROUTES AS REUSABLE CONSTANTS
     */
    ROUTES: {
      notFound: '404',
      products: 'products',
      productDetails: 'products/:productId'
    },

    /**
     * Softgarden support mail address
     */
    SOFTGARDEN_SUPPORT_MAIL: 'support@softgarden.de',

    /**
     * Softgarden links to respective languages versions (used in the footer component)
     */
    SOFTGARDEN_LINK_EN: 'https://www.softgarden.io/',
    SOFTGARDEN_LINK_DE: 'https://www.softgarden.de/',
    SOFTGARDEN_LINK_PL: 'https://pl.softgarden.io/',
    SOFTGARDEN_LINK_ES: 'https://es.softgarden.io/',

    /**
     * Imprint links to respective languages versions (used in the footer component)
     */
    IMPRINT_LINK_EN: 'https://www.softgarden.io/company/imprint/',
    IMPRINT_LINK_DE: 'https://www.softgarden.de/unternehmen/impressum/',
    IMPRINT_LINK_PL: 'https://pl.softgarden.io/firma/imprint/',
    IMPRINT_LINK_ES: 'https://es.softgarden.io/empresa/aviso-legal/',

    /**
     * Privacy policy links to respective languages versions (used in the footer component)
     */
    PRIVACY_POLICY_LINK_EN: 'https://www.softgarden.io/company/privacy-products/',
    PRIVACY_POLICY_LINK_DE: 'https://www.softgarden.de/unternehmen/datenschutz-produkte/',
    PRIVACY_POLICY_LINK_PL: 'https://pl.softgarden.io/firma/polityka-prywatnosci-dot-produktow/',
    PRIVACY_POLICY_LINK_ES: 'https://es.softgarden.io/empresa/politica-de-privacidad-de-los-productos/',

    /**
     * Terms links to respective languages versions (used in the footer component)
     */
    TERMS_LINK_EN: 'https://www.softgarden.io/company/terms/',
    TERMS_LINK_DE: 'https://www.softgarden.de/unternehmen/nutzungsbedingungen/',
    TERMS_LINK_PL: 'https://pl.softgarden.io/firma/warunki-uzytkowania/',
    TERMS_LINK_ES: 'https://es.softgarden.io/empresa/terminos-y-condiciones/',

    /**
     * REGEX PATTERNS WHICH CAN BE USED FOR VALIDATION
     */
    VALIDATION_PATTERNS: {

      // Validates an url (have to start with http/https)
      url: new RegExp(/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/gm),

      // Not ending with whitespace    => [^\s]
      firstName: new RegExp(/^(?![\s\d])(?=.{1,})(?!.*\s{2,})(?!.*[!"#$%&()*+,/:;=?@\\_{|}~<>])().*[^\s]$/),

      // At least a length of 2 chars.
      // Not starting with whitespace
      // Not containing more than 1 directly following whitespace
      // Not containing one of thee listed special signs
      lastName: new RegExp(/^(?![\s\d])(?=.{2,})(?!.*\s{2,})(?!.*[!"#$%&()*+,/:;=?@\\_{|}~<>])().*[^\s]$/),

      // The email pattern which is used to validate email input fields
      email: new RegExp(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),

      // Phone pattern which is used for phone input fields
      phone: new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
    }
  };
}
