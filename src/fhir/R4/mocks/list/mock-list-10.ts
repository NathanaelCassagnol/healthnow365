import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-long.json.html
// A long list with many entries for testing handling longer lists

export const mockList10: List = {
    "resourceType": "List",
    "id": "long",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: long</p><p><b>status</b>: current</p><p><b>mode</b>: changes</p><p><b>date</b>: 21/02/2018 12:17:00 PM</p><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/example</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat1</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat2</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat3</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/pat4</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/1</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/2</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/3</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/4</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/5</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/6</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/7</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/8</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/9</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/10</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/11</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/12</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/71</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/72</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/73</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/74</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/75</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/76</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/77</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/78</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/79</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/80</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/81</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/82</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/83</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/84</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/85</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/86</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/87</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/88</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/89</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/90</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/91</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/92</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/93</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/94</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/95</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/96</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/97</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/98</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/99</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/100</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/101</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/102</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/103</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/104</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/105</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/106</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/107</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/108</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/109</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/110</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/111</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/112</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/113</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/114</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/115</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/116</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/117</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/118</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/119</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/120</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/121</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/122</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/123</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/124</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/125</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/126</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/127</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/128</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/129</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/130</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/131</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/132</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/133</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/134</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/135</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/136</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/137</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/138</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/139</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/140</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/141</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/142</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/143</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/144</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/145</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/146</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/147</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/148</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/149</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/150</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/151</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/152</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/153</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/154</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/155</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/156</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/157</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/158</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/159</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/160</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/161</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/162</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/163</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/164</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/165</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/166</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/167</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/168</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/169</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/170</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/171</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/172</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/173</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/174</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/175</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/176</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/177</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/178</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/179</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/180</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/181</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/182</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/183</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/184</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/185</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/186</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/187</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/188</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/189</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/190</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/191</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/192</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/193</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/194</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/195</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/196</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/197</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/198</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/199</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/200</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/201</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/202</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/203</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/204</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/205</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/206</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/207</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/208</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/209</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/210</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/211</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/212</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/213</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/214</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/215</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/216</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/217</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/218</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/219</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/220</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/221</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/222</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/223</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/224</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/225</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/226</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/227</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/228</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/229</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/230</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/231</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/232</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/233</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/234</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/235</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/236</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/237</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/238</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/239</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/240</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/241</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/242</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/243</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/244</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/245</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/246</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/247</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/248</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/249</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/250</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/251</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/252</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/253</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/254</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/255</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/256</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/257</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/258</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/259</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/260</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/261</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/262</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/263</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/264</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/265</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/266</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/267</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/268</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/269</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/270</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/271</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/272</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/273</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/274</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/275</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/276</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/277</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/278</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/279</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/280</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/281</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/282</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/283</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/284</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/285</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/286</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/287</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/288</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/289</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/290</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/291</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/292</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/293</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/294</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/295</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/xcda</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/xds</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/animal</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/dicom</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/ihe-pcd</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/f001</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/f201</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/glossy</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/proband</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/genetics-example1</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/ch-example</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/newborn</a></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Patient/mom</a></p></blockquote></div>"
    },
    "status": "current",
    "mode": "changes",
    "date": "2018-02-21T12:17:00+11:00",
    "entry": [
      {
        "item": {
          "reference": "Patient/example"
        }
      },
      {
        "item": {
          "reference": "Patient/pat1"
        }
      },
      {
        "item": {
          "reference": "Patient/pat2"
        }
      },
      {
        "item": {
          "reference": "Patient/pat3"
        }
      },
      {
        "item": {
          "reference": "Patient/pat4"
        }
      },
      {
        "item": {
          "reference": "Patient/1"
        }
      },
      {
        "item": {
          "reference": "Patient/2"
        }
      },
      {
        "item": {
          "reference": "Patient/3"
        }
      },
      {
        "item": {
          "reference": "Patient/4"
        }
      },
      {
        "item": {
          "reference": "Patient/5"
        }
      },
      {
        "item": {
          "reference": "Patient/6"
        }
      },
      {
        "item": {
          "reference": "Patient/7"
        }
      },
      {
        "item": {
          "reference": "Patient/8"
        }
      },
      {
        "item": {
          "reference": "Patient/9"
        }
      },
      {
        "item": {
          "reference": "Patient/10"
        }
      },
      {
        "item": {
          "reference": "Patient/11"
        }
      },
      {
        "item": {
          "reference": "Patient/12"
        }
      },
      {
        "item": {
          "reference": "Patient/71"
        }
      },
      {
        "item": {
          "reference": "Patient/72"
        }
      },
      {
        "item": {
          "reference": "Patient/73"
        }
      },
      {
        "item": {
          "reference": "Patient/74"
        }
      },
      {
        "item": {
          "reference": "Patient/75"
        }
      },
      {
        "item": {
          "reference": "Patient/76"
        }
      },
      {
        "item": {
          "reference": "Patient/77"
        }
      },
      {
        "item": {
          "reference": "Patient/78"
        }
      },
      {
        "item": {
          "reference": "Patient/79"
        }
      },
      {
        "item": {
          "reference": "Patient/80"
        }
      },
      {
        "item": {
          "reference": "Patient/81"
        }
      },
      {
        "item": {
          "reference": "Patient/82"
        }
      },
      {
        "item": {
          "reference": "Patient/83"
        }
      },
      {
        "item": {
          "reference": "Patient/84"
        }
      },
      {
        "item": {
          "reference": "Patient/85"
        }
      },
      {
        "item": {
          "reference": "Patient/86"
        }
      },
      {
        "item": {
          "reference": "Patient/87"
        }
      },
      {
        "item": {
          "reference": "Patient/88"
        }
      },
      {
        "item": {
          "reference": "Patient/89"
        }
      },
      {
        "item": {
          "reference": "Patient/90"
        }
      },
      {
        "item": {
          "reference": "Patient/91"
        }
      },
      {
        "item": {
          "reference": "Patient/92"
        }
      },
      {
        "item": {
          "reference": "Patient/93"
        }
      },
      {
        "item": {
          "reference": "Patient/94"
        }
      },
      {
        "item": {
          "reference": "Patient/95"
        }
      },
      {
        "item": {
          "reference": "Patient/96"
        }
      },
      {
        "item": {
          "reference": "Patient/97"
        }
      },
      {
        "item": {
          "reference": "Patient/98"
        }
      },
      {
        "item": {
          "reference": "Patient/99"
        }
      },
      {
        "item": {
          "reference": "Patient/100"
        }
      },
      {
        "item": {
          "reference": "Patient/101"
        }
      },
      {
        "item": {
          "reference": "Patient/102"
        }
      },
      {
        "item": {
          "reference": "Patient/103"
        }
      },
      {
        "item": {
          "reference": "Patient/104"
        }
      },
      {
        "item": {
          "reference": "Patient/105"
        }
      },
      {
        "item": {
          "reference": "Patient/106"
        }
      },
      {
        "item": {
          "reference": "Patient/107"
        }
      },
      {
        "item": {
          "reference": "Patient/108"
        }
      },
      {
        "item": {
          "reference": "Patient/109"
        }
      },
      {
        "item": {
          "reference": "Patient/110"
        }
      },
      {
        "item": {
          "reference": "Patient/111"
        }
      },
      {
        "item": {
          "reference": "Patient/112"
        }
      },
      {
        "item": {
          "reference": "Patient/113"
        }
      },
      {
        "item": {
          "reference": "Patient/114"
        }
      },
      {
        "item": {
          "reference": "Patient/115"
        }
      },
      {
        "item": {
          "reference": "Patient/116"
        }
      },
      {
        "item": {
          "reference": "Patient/117"
        }
      },
      {
        "item": {
          "reference": "Patient/118"
        }
      },
      {
        "item": {
          "reference": "Patient/119"
        }
      },
      {
        "item": {
          "reference": "Patient/120"
        }
      },
      {
        "item": {
          "reference": "Patient/121"
        }
      },
      {
        "item": {
          "reference": "Patient/122"
        }
      },
      {
        "item": {
          "reference": "Patient/123"
        }
      },
      {
        "item": {
          "reference": "Patient/124"
        }
      },
      {
        "item": {
          "reference": "Patient/125"
        }
      },
      {
        "item": {
          "reference": "Patient/126"
        }
      },
      {
        "item": {
          "reference": "Patient/127"
        }
      },
      {
        "item": {
          "reference": "Patient/128"
        }
      },
      {
        "item": {
          "reference": "Patient/129"
        }
      },
      {
        "item": {
          "reference": "Patient/130"
        }
      },
      {
        "item": {
          "reference": "Patient/131"
        }
      },
      {
        "item": {
          "reference": "Patient/132"
        }
      },
      {
        "item": {
          "reference": "Patient/133"
        }
      },
      {
        "item": {
          "reference": "Patient/134"
        }
      },
      {
        "item": {
          "reference": "Patient/135"
        }
      },
      {
        "item": {
          "reference": "Patient/136"
        }
      },
      {
        "item": {
          "reference": "Patient/137"
        }
      },
      {
        "item": {
          "reference": "Patient/138"
        }
      },
      {
        "item": {
          "reference": "Patient/139"
        }
      },
      {
        "item": {
          "reference": "Patient/140"
        }
      },
      {
        "item": {
          "reference": "Patient/141"
        }
      },
      {
        "item": {
          "reference": "Patient/142"
        }
      },
      {
        "item": {
          "reference": "Patient/143"
        }
      },
      {
        "item": {
          "reference": "Patient/144"
        }
      },
      {
        "item": {
          "reference": "Patient/145"
        }
      },
      {
        "item": {
          "reference": "Patient/146"
        }
      },
      {
        "item": {
          "reference": "Patient/147"
        }
      },
      {
        "item": {
          "reference": "Patient/148"
        }
      },
      {
        "item": {
          "reference": "Patient/149"
        }
      },
      {
        "item": {
          "reference": "Patient/150"
        }
      },
      {
        "item": {
          "reference": "Patient/151"
        }
      },
      {
        "item": {
          "reference": "Patient/152"
        }
      },
      {
        "item": {
          "reference": "Patient/153"
        }
      },
      {
        "item": {
          "reference": "Patient/154"
        }
      },
      {
        "item": {
          "reference": "Patient/155"
        }
      },
      {
        "item": {
          "reference": "Patient/156"
        }
      },
      {
        "item": {
          "reference": "Patient/157"
        }
      },
      {
        "item": {
          "reference": "Patient/158"
        }
      },
      {
        "item": {
          "reference": "Patient/159"
        }
      },
      {
        "item": {
          "reference": "Patient/160"
        }
      },
      {
        "item": {
          "reference": "Patient/161"
        }
      },
      {
        "item": {
          "reference": "Patient/162"
        }
      },
      {
        "item": {
          "reference": "Patient/163"
        }
      },
      {
        "item": {
          "reference": "Patient/164"
        }
      },
      {
        "item": {
          "reference": "Patient/165"
        }
      },
      {
        "item": {
          "reference": "Patient/166"
        }
      },
      {
        "item": {
          "reference": "Patient/167"
        }
      },
      {
        "item": {
          "reference": "Patient/168"
        }
      },
      {
        "item": {
          "reference": "Patient/169"
        }
      },
      {
        "item": {
          "reference": "Patient/170"
        }
      },
      {
        "item": {
          "reference": "Patient/171"
        }
      },
      {
        "item": {
          "reference": "Patient/172"
        }
      },
      {
        "item": {
          "reference": "Patient/173"
        }
      },
      {
        "item": {
          "reference": "Patient/174"
        }
      },
      {
        "item": {
          "reference": "Patient/175"
        }
      },
      {
        "item": {
          "reference": "Patient/176"
        }
      },
      {
        "item": {
          "reference": "Patient/177"
        }
      },
      {
        "item": {
          "reference": "Patient/178"
        }
      },
      {
        "item": {
          "reference": "Patient/179"
        }
      },
      {
        "item": {
          "reference": "Patient/180"
        }
      },
      {
        "item": {
          "reference": "Patient/181"
        }
      },
      {
        "item": {
          "reference": "Patient/182"
        }
      },
      {
        "item": {
          "reference": "Patient/183"
        }
      },
      {
        "item": {
          "reference": "Patient/184"
        }
      },
      {
        "item": {
          "reference": "Patient/185"
        }
      },
      {
        "item": {
          "reference": "Patient/186"
        }
      },
      {
        "item": {
          "reference": "Patient/187"
        }
      },
      {
        "item": {
          "reference": "Patient/188"
        }
      },
      {
        "item": {
          "reference": "Patient/189"
        }
      },
      {
        "item": {
          "reference": "Patient/190"
        }
      },
      {
        "item": {
          "reference": "Patient/191"
        }
      },
      {
        "item": {
          "reference": "Patient/192"
        }
      },
      {
        "item": {
          "reference": "Patient/193"
        }
      },
      {
        "item": {
          "reference": "Patient/194"
        }
      },
      {
        "item": {
          "reference": "Patient/195"
        }
      },
      {
        "item": {
          "reference": "Patient/196"
        }
      },
      {
        "item": {
          "reference": "Patient/197"
        }
      },
      {
        "item": {
          "reference": "Patient/198"
        }
      },
      {
        "item": {
          "reference": "Patient/199"
        }
      },
      {
        "item": {
          "reference": "Patient/200"
        }
      },
      {
        "item": {
          "reference": "Patient/201"
        }
      },
      {
        "item": {
          "reference": "Patient/202"
        }
      },
      {
        "item": {
          "reference": "Patient/203"
        }
      },
      {
        "item": {
          "reference": "Patient/204"
        }
      },
      {
        "item": {
          "reference": "Patient/205"
        }
      },
      {
        "item": {
          "reference": "Patient/206"
        }
      },
      {
        "item": {
          "reference": "Patient/207"
        }
      },
      {
        "item": {
          "reference": "Patient/208"
        }
      },
      {
        "item": {
          "reference": "Patient/209"
        }
      },
      {
        "item": {
          "reference": "Patient/210"
        }
      },
      {
        "item": {
          "reference": "Patient/211"
        }
      },
      {
        "item": {
          "reference": "Patient/212"
        }
      },
      {
        "item": {
          "reference": "Patient/213"
        }
      },
      {
        "item": {
          "reference": "Patient/214"
        }
      },
      {
        "item": {
          "reference": "Patient/215"
        }
      },
      {
        "item": {
          "reference": "Patient/216"
        }
      },
      {
        "item": {
          "reference": "Patient/217"
        }
      },
      {
        "item": {
          "reference": "Patient/218"
        }
      },
      {
        "item": {
          "reference": "Patient/219"
        }
      },
      {
        "item": {
          "reference": "Patient/220"
        }
      },
      {
        "item": {
          "reference": "Patient/221"
        }
      },
      {
        "item": {
          "reference": "Patient/222"
        }
      },
      {
        "item": {
          "reference": "Patient/223"
        }
      },
      {
        "item": {
          "reference": "Patient/224"
        }
      },
      {
        "item": {
          "reference": "Patient/225"
        }
      },
      {
        "item": {
          "reference": "Patient/226"
        }
      },
      {
        "item": {
          "reference": "Patient/227"
        }
      },
      {
        "item": {
          "reference": "Patient/228"
        }
      },
      {
        "item": {
          "reference": "Patient/229"
        }
      },
      {
        "item": {
          "reference": "Patient/230"
        }
      },
      {
        "item": {
          "reference": "Patient/231"
        }
      },
      {
        "item": {
          "reference": "Patient/232"
        }
      },
      {
        "item": {
          "reference": "Patient/233"
        }
      },
      {
        "item": {
          "reference": "Patient/234"
        }
      },
      {
        "item": {
          "reference": "Patient/235"
        }
      },
      {
        "item": {
          "reference": "Patient/236"
        }
      },
      {
        "item": {
          "reference": "Patient/237"
        }
      },
      {
        "item": {
          "reference": "Patient/238"
        }
      },
      {
        "item": {
          "reference": "Patient/239"
        }
      },
      {
        "item": {
          "reference": "Patient/240"
        }
      },
      {
        "item": {
          "reference": "Patient/241"
        }
      },
      {
        "item": {
          "reference": "Patient/242"
        }
      },
      {
        "item": {
          "reference": "Patient/243"
        }
      },
      {
        "item": {
          "reference": "Patient/244"
        }
      },
      {
        "item": {
          "reference": "Patient/245"
        }
      },
      {
        "item": {
          "reference": "Patient/246"
        }
      },
      {
        "item": {
          "reference": "Patient/247"
        }
      },
      {
        "item": {
          "reference": "Patient/248"
        }
      },
      {
        "item": {
          "reference": "Patient/249"
        }
      },
      {
        "item": {
          "reference": "Patient/250"
        }
      },
      {
        "item": {
          "reference": "Patient/251"
        }
      },
      {
        "item": {
          "reference": "Patient/252"
        }
      },
      {
        "item": {
          "reference": "Patient/253"
        }
      },
      {
        "item": {
          "reference": "Patient/254"
        }
      },
      {
        "item": {
          "reference": "Patient/255"
        }
      },
      {
        "item": {
          "reference": "Patient/256"
        }
      },
      {
        "item": {
          "reference": "Patient/257"
        }
      },
      {
        "item": {
          "reference": "Patient/258"
        }
      },
      {
        "item": {
          "reference": "Patient/259"
        }
      },
      {
        "item": {
          "reference": "Patient/260"
        }
      },
      {
        "item": {
          "reference": "Patient/261"
        }
      },
      {
        "item": {
          "reference": "Patient/262"
        }
      },
      {
        "item": {
          "reference": "Patient/263"
        }
      },
      {
        "item": {
          "reference": "Patient/264"
        }
      },
      {
        "item": {
          "reference": "Patient/265"
        }
      },
      {
        "item": {
          "reference": "Patient/266"
        }
      },
      {
        "item": {
          "reference": "Patient/267"
        }
      },
      {
        "item": {
          "reference": "Patient/268"
        }
      },
      {
        "item": {
          "reference": "Patient/269"
        }
      },
      {
        "item": {
          "reference": "Patient/270"
        }
      },
      {
        "item": {
          "reference": "Patient/271"
        }
      },
      {
        "item": {
          "reference": "Patient/272"
        }
      },
      {
        "item": {
          "reference": "Patient/273"
        }
      },
      {
        "item": {
          "reference": "Patient/274"
        }
      },
      {
        "item": {
          "reference": "Patient/275"
        }
      },
      {
        "item": {
          "reference": "Patient/276"
        }
      },
      {
        "item": {
          "reference": "Patient/277"
        }
      },
      {
        "item": {
          "reference": "Patient/278"
        }
      },
      {
        "item": {
          "reference": "Patient/279"
        }
      },
      {
        "item": {
          "reference": "Patient/280"
        }
      },
      {
        "item": {
          "reference": "Patient/281"
        }
      },
      {
        "item": {
          "reference": "Patient/282"
        }
      },
      {
        "item": {
          "reference": "Patient/283"
        }
      },
      {
        "item": {
          "reference": "Patient/284"
        }
      },
      {
        "item": {
          "reference": "Patient/285"
        }
      },
      {
        "item": {
          "reference": "Patient/286"
        }
      },
      {
        "item": {
          "reference": "Patient/287"
        }
      },
      {
        "item": {
          "reference": "Patient/288"
        }
      },
      {
        "item": {
          "reference": "Patient/289"
        }
      },
      {
        "item": {
          "reference": "Patient/290"
        }
      },
      {
        "item": {
          "reference": "Patient/291"
        }
      },
      {
        "item": {
          "reference": "Patient/292"
        }
      },
      {
        "item": {
          "reference": "Patient/293"
        }
      },
      {
        "item": {
          "reference": "Patient/294"
        }
      },
      {
        "item": {
          "reference": "Patient/295"
        }
      },
      {
        "item": {
          "reference": "Patient/xcda"
        }
      },
      {
        "item": {
          "reference": "Patient/xds"
        }
      },
      {
        "item": {
          "reference": "Patient/animal"
        }
      },
      {
        "item": {
          "reference": "Patient/dicom"
        }
      },
      {
        "item": {
          "reference": "Patient/ihe-pcd"
        }
      },
      {
        "item": {
          "reference": "Patient/f001"
        }
      },
      {
        "item": {
          "reference": "Patient/f201"
        }
      },
      {
        "item": {
          "reference": "Patient/glossy"
        }
      },
      {
        "item": {
          "reference": "Patient/proband"
        }
      },
      {
        "item": {
          "reference": "Patient/genetics-example1"
        }
      },
      {
        "item": {
          "reference": "Patient/ch-example"
        }
      },
      {
        "item": {
          "reference": "Patient/newborn"
        }
      },
      {
        "item": {
          "reference": "Patient/mom"
        }
      }
    ]
  }