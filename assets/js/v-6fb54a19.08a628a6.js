"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21096],{309383:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-6fb54a19","path":"/devices/MFKZQ01LM.html","title":"Xiaomi MFKZQ01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi MFKZQ01LM control via MQTT","description":"Integrate your Xiaomi MFKZQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:54.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action angle (numeric)","slug":"action-angle-numeric","link":"#action-angle-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Action from side (numeric)","slug":"action-from-side-numeric","link":"#action-from-side-numeric","children":[]},{"level":3,"title":"Action side (numeric)","slug":"action-side-numeric","link":"#action-side-numeric","children":[]},{"level":3,"title":"Action to side (numeric)","slug":"action-to-side-numeric","link":"#action-to-side-numeric","children":[]},{"level":3,"title":"Side (numeric)","slug":"side-numeric","link":"#side-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1698866025000},"filePathRelative":"devices/MFKZQ01LM.md"}')},968084:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(166252);const a=(0,o._)("h1",{id:"xiaomi-mfkzq01lm",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-mfkzq01lm","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi MFKZQ01LM")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"MFKZQ01LM")],-1),c=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Mi/Aqara smart home cube")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, voltage, action_angle, device_temperature, power_outage_count, action_from_side, action_side, action_to_side, side, action, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MFKZQ01LM.jpg",alt:"Xiaomi MFKZQ01LM"})])],-1),s=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-angle-numeric" aria-hidden="true">#</a> Action angle (numeric)</h3><p>Value can be found in the published state on the <code>action_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-360</code> and the maximum value is <code>360</code>. The unit of this value is <code>°</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-from-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-from-side-numeric" aria-hidden="true">#</a> Action from side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_from_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-side-numeric" aria-hidden="true">#</a> Action side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-to-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-to-side-numeric" aria-hidden="true">#</a> Action to side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_to_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="side-numeric" tabindex="-1"><a class="header-anchor" href="#side-numeric" aria-hidden="true">#</a> Side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>shake</code>, <code>throw</code>, <code>wakeup</code>, <code>fall</code>, <code>tap</code>, <code>slide</code>, <code>flip180</code>, <code>flip90</code>, <code>rotate_left</code>, <code>rotate_right</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),r,l,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);