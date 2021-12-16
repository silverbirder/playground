extern crate dotenv;
extern crate google_drive3;
extern crate yup_oauth2;

use dotenv::dotenv;
use google_drive3::oauth2 as oauth;
use google_drive3::{api::File, hyper, hyper_rustls, DriveHub};
use std::{env, fs};

#[tokio::main]
async fn main() {
    dotenv().ok();
    let service_account_key = oauth::read_service_account_key(&"key.json".to_string())
        .await
        .expect("client secret couldn't be read.");
    let authenticator = oauth::ServiceAccountAuthenticator::builder(service_account_key)
        .build()
        .await
        .expect("failed to create authenticator");
    let client = hyper::Client::builder().build(hyper_rustls::HttpsConnector::with_native_roots());

    let hub = DriveHub::new(client, authenticator);
    let mut req = File::default();
    let google_drive_id = env::var("GOOGLE_DRIVE_ID").expect("GOOGLE_DRIVE_ID must be set");
    req.parents = Some(vec![google_drive_id]);
    req.name = Some("Invoices".to_string());
    hub.files()
        .create(req)
        .add_scope("https://www.googleapis.com/auth/drive")
        .upload(
            fs::File::open("./src/main.rs").unwrap(),
            "application/vnd.google-apps.folder".parse().unwrap(),
        )
        .await
        .expect("failed to upload google drive");

    // let result = hub
    //     .files()
    //     .list()
    //     .add_scope("https://www.googleapis.com/auth/drive")
    //     // .q("name contains 'xxxx'")
    //     .doit()
    //     .await
    //     .expect("failed to request google drive");
    // for file in result.1.files.unwrap() {
    //     println!("{:?}", file.web_content_link);
    //     println!("{:?}", file.export_links);
    //     println!("{:?}", file.web_view_link);
    // }

    // let result = hub
    //     .files()
    //     .get("xxxx")
    //     .param("alt", "media")
    //     .add_scope("https://www.googleapis.com/auth/drive")
    //     .acknowledge_abuse(true)
    //     .doit()
    //     .await
    //     .expect("failed to request google drive");
}
