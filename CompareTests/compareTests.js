const fs = require("fs");

function compareTests(path1, path2) {
  let tests = JSON.parse(fs.readFileSync(path1, "utf8"));
  let tests2 = JSON.parse(fs.readFileSync(path2, "utf8"));
  console.log(`Longitud de ${path1}: ${tests.length}`);
  console.log(`Longitud de ${path2}: ${tests2.length}`);

  let result = tests2.filter(
    (
      {
        UGName,
        UOL1Name,
        UOL2Name,
        ServiceL1Name,
        ServiceL2Name,
        tier,
        period_start,
        issue_key_dec,
        jira_url,
        issue_key_mon,
        event_timestamp, 
        full_name, 
        url,
        uid,
        id
      }
        ) =>
      !tests.some(
        (x) =>
          x.UGName === UGName &&
          x.UOL1Name === UOL1Name &&
          x.UOL2Name === UOL2Name &&
          x.ServiceL1Name === ServiceL1Name &&
          x.ServiceL2Name === ServiceL2Name &&
          x.tier === tier &&
          x.period_start === period_start &&
          x.issue_key_dec === issue_key_dec &&
          x.jira_url === jira_url &&
          x.issue_key_mon === issue_key_mon &&
          x.event_timestamp === event_timestamp &&
          x.full_name === full_name &&
          x.url === url &&
          x.uid === uid &&
          x.id === id
      )
  );
  let result2 = tests.filter(
    (
      {
        UGName,
        UOL1Name,
        UOL2Name,
        ServiceL1Name,
        ServiceL2Name,
        tier,
        period_start,
        issue_key_dec,
        jira_url,
        issue_key_mon,
        event_timestamp, 
        full_name, 
        url,
        uid,
        id
      }
        ) =>
      !tests2.some(
        (x) =>
          x.UGName === UGName &&
          x.UOL1Name === UOL1Name &&
          x.UOL2Name === UOL2Name &&
          x.ServiceL1Name === ServiceL1Name &&
          x.ServiceL2Name === ServiceL2Name &&
          x.tier === tier &&
          x.period_start === period_start &&
          x.issue_key_dec === issue_key_dec &&
          x.jira_url === jira_url &&
          x.issue_key_mon === issue_key_mon &&
          x.event_timestamp === event_timestamp &&
          x.full_name === full_name &&
          x.url === url &&
          x.uid === uid &&
          x.id === id
      )
  );
  if (result.length > 0) {
    console.log("-------------------------");
    console.log(
      "Estas son las diferencias, objetos que no están en el primer archivo"
    );
    console.log(result);
  } 
  
 if (result2.length > 0) {
    console.log("-------------------------");
    console.log(
      "Estas son las diferencias, objetos que no están en el segundo archivo"
    );
    console.log(result2);
  }
}

compareTests(
  "C:\\Users\\DarioGarciaBalandin\\Desktop\\Repositories\\AllJS\\CompareTests\\prefiltrotags.json",
  "C:\\Users\\DarioGarciaBalandin\\Desktop\\Repositories\\AllJS\\CompareTests\\testsviejos.json"
);
