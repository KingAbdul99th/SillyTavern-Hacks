export function initScrapers(): Promise<void>;
/**
 * @typedef {Object} Scraper
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} iconClass
 * @property {boolean} iconAvailable
 * @property {() => Promise<void>} [init=null]
 * @property {() => Promise<boolean>} isAvailable
 * @property {() => Promise<File[]>} scrape
 */
/**
 * @typedef {Object} ScraperInfo
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} iconClass
 * @property {boolean} iconAvailable
 */
export class ScraperManager {
    /**
     * @type {Scraper[]}
     */
    static "__#9@#scrapers": Scraper[];
    /**
     * Register a scraper to be used by the Data Bank.
     * @param {Scraper} scraper Instance of a scraper to register
     */
    static registerDataBankScraper(scraper: Scraper): Promise<void>;
    /**
     * Gets a list of scrapers available for the Data Bank.
     * @returns {ScraperInfo[]} List of scrapers available for the Data Bank
     */
    static getDataBankScrapers(): ScraperInfo[];
    /**
     * Run a scraper to scrape data into the Data Bank.
     * @param {string} scraperId ID of the scraper to run
     * @returns {Promise<File[]>} List of files scraped by the scraper
     */
    static runDataBankScraper(scraperId: string): Promise<File[]>;
    /**
     * Check if a scraper is available.
     * @param {string} scraperId ID of the scraper to check
     * @returns {Promise<boolean>} Whether the scraper is available
     */
    static isScraperAvailable(scraperId: string): Promise<boolean>;
}
export type Scraper = {
    id: string;
    name: string;
    description: string;
    iconClass: string;
    iconAvailable: boolean;
    init?: () => Promise<void>;
    isAvailable: () => Promise<boolean>;
    scrape: () => Promise<File[]>;
};
export type ScraperInfo = {
    id: string;
    name: string;
    description: string;
    iconClass: string;
    iconAvailable: boolean;
};
//# sourceMappingURL=scrapers.d.ts.map