// Snapchat-Memory Downloader

var go = 0;
//0 is the start number

function download(){
    var links = document.getElementsByTagName("table")[0].getElementsByTagName("a");
    //Finds all of the "download" button entities and putting them under the variable 'links'
    eval(links[go].href);
    //Is evaluating the download button with the variable 0 so you start off with the first one
    go++;
    //Makes the variable 0 go up in 1 increment everytime it gets to this part
    console.log(go);
    //Keeps progress of how many downloads you have initated (Can run behind if you have it on a high setting)
    setTimeout(download, 5000);
    //If you don't have a timeout it will just try and download all of them at once. This is the optimum speed but obviously
    //feel free to increase or decrease.
    //it starts the script again every 5 seconds so you have plenty of time to download the files.
    };

download(); https://app.snapchat.com/dmd/memories?uid=0f3d3deb-1ac4-4c1c-9259-a1bad311541c&sid=8C4958E1-24EF-4308-9944-236B6D045ECD&mid=8C4958E1-24EF-4308-9944-236B6D045ECD&ts=1607406605522&proxy=true&sig=a0310a714c0697fbd870d7fb47a79b9787aaea216e5c61f8887a44ea61607ae5

