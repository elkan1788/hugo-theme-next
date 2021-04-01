#!/bin/bash

echo "Start replace the plugin's paramter"

## replace the paramter's values
sed -i 's/Your AddthisId/'$AddthisId'/g;s/Your BaiduSiteId/'$BaiduSiteId'/g;s/Your CNNZSiteId/'$CNNZSiteId'/g;s/Your DaoVoiceId/'$DaoVoiceId'/g;s/Your GoogleSiteId/'$GoogleSiteId'/g;s/Your LCAppId/'$LCAppId'/g;s/Your LCAppKey/'$LCAppKey'/g;s|Your LCServer|'$LCServer'|g;s/Your LiveReId/'$LiveReId'/g;s/Your RevolverMapId/'$RevolverMapId'/g;s|Your WalineSerURL|'$WalineSerURL'|g' config/_default/params.toml

echo "Replace the plugin's paramter is success."