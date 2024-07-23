function getNotionData(){
  const apiKey = PropertiesService.getScriptProperties().getProperty("NOTION_API_KEY");
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Notion-Version": "2022-06-28",
  };
  const data = {
    filter:{
      or:[
        {
          property: "Name",
          title:{
            is_not_empty: true,
          }
        },
      ],
    },
  }
  const options = {
    method: "POST",
    contentType: "application/json",
    headers: headers,
    payload: JSON.stringify(data),
  };
  const response = UrlFetchApp.fetch(    
    "https://api.notion.com/v1/databases/33dba351453745d9bed090ae869143a3/query",
    options
  );
  return response.getContentText();
}
