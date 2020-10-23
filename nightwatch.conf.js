/* global require, module */

const seleniumServer = require('selenium-server-standalone-jar');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

module.exports = {
    src_folders : ["build"],
    page_objects_path: ["build/page-objects"],
    selenium: {
       start_process: true, 
       start_session : true,
        host: '127.0.0.1', 
        port: 4444,
        server_path: seleniumServer.path,
        cli_args: {
        'webdriver.chrome.driver': chromeDriver.path,
        'webdriver.gecko.driver': geckoDriver.path
      },
        log_path: 'test_results',
        default_path_prefix: '/wd/hub'
    },
    test_workers: {
        enabled: true,
        workers: 'auto'
      },
    test_settings: {
        default : {
            selenium: { 
                start_process: true, 
                silent: true,
                host: '127.0.0.1', 
                port: 4445,
                server_path: seleniumServer.path,
                cli_args: {
                 'webdriver.chrome.driver': chromeDriver.path,
                 'webdriver.gecko.driver': geckoDriver.path
               }
            },
            screenshots : {
                enabled : true,
                on_failure : true,
                path : './screenshots'
              }
        },
        chrome: {
            desiredCapabilities: {
            acceptSslCerts: true,
            browserName: 'chrome',
            chromeOptions: {
            args: [
                'ignore-certificate-errors',
                'window-size=2560,1440',
        ]
           },
            javascriptEnabled: true
        },
        detailed_output: false,
        live_output: true,
        },
        firefox: {
            desiredCapabilities: {
            acceptSslCerts: true,
            browserName: 'firefox',
            javascriptEnabled: true,
            marionette: true,
            firefoxOptions: {
                args: [
                    'ignore-certificate-errors',
                    'window-size=2560,1440',]
               }
        },
        detailed_output: false,
        live_output: true,
        },
        skip_testcases_on_fail: false,
    }  
}  
