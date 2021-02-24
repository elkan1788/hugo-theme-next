#!/bin/bash

echo "Start replace the plugin's paramter"

## replace the paramter's values
sed -i 's/Your LiveReId/'$LiveReId'/g' config/_default/params.toml
sed -i 's/Your BShareId/'$BShareId'/g' config/_default/params.toml
sed -i 's/Your RevolverMapId/'$RevolverMapId'/g' config/_default/params.toml
sed -i 's/Your LCAppId/'$LCAppId'/g' config/_default/params.toml
sed -i 's/Your LCAppKey/'$LCAppKey'/g' config/_default/params.toml
sed -i 's/Your LCServer/'$LCServer'/g' config/_default/params.toml
sed -i 's/Your CNNZSiteId/'$CNNZSiteId'/g' config/_default/params.toml
sed -i 's/Your BaiduSiteId/'$BaiduSiteId'/g' config/_default/params.toml
sed -i 's/Your GoogleSiteId/'$GoogleSiteId'/g' config/_default/params.toml
sed -i 's/Your DaoVoiceId/'$DaoVoiceId'/g' config/_default/params.toml

echo "Replace the plugin's paramter is success."