import { ValueSet } from "fhir/R4/types/value-set";

// https://hl7.org/fhir/R4/valueset-ucum-common.json.html
// Common UCUM codes

export const mockValueSet6: ValueSet = {
    "resourceType": "ValueSet",
    "id": "ucum-common",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>Common UCUM units</h2>\n      <div>\n        <p>Commonly encountered UCUM units (for purposes of helping populate look ups.</p>\n\n      </div>\n      <p>\n        <b>Copyright Statement:</b>\n      </p>\n      <div>\n        <p>UCUM is Copyright © 1999-2013 Regenstrief Institute, Inc. and The UCUM Organization, Indianapolis, IN. All rights reserved. See http://unitsofmeasure.org/trac//wiki/TermsOfUse for details.</p>\n\n      </div>\n      <p>This value set includes codes from the following code systems:</p>\n      <ul>\n        <li>Include these codes as defined in \n          <a href=\"http://unitsofmeasure.org\">\n            <code>http://unitsofmeasure.org</code>\n          </a>\n          <table class=\"none\">\n            <tr>\n              <td style=\"white-space:nowrap\">\n                <b>Code</b>\n              </td>\n              <td>\n                <b>Display</b>\n              </td>\n            </tr>\n            <tr>\n              <td>%</td>\n              <td>percent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%/100{WBC}</td>\n              <td>percent / 100 WBC</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{0to3Hours}</td>\n              <td>percent 0to3Hours</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Abnormal}</td>\n              <td>percent Abnormal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Activity}</td>\n              <td>percent Activity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{BasalActivity}</td>\n              <td>percent BasalActivity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Binding}</td>\n              <td>percent Binding</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Blockade}</td>\n              <td>percent Blockade</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Carboxyhemoglobin}</td>\n              <td>percent Carboxyhemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Conversion}</td>\n              <td>percent Conversion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Cound}</td>\n              <td>percent Cound</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{EosSeen}</td>\n              <td>percent EosSeen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Excretion}</td>\n              <td>percent Excretion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Fat}</td>\n              <td>percent Fat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{FetalErythrocytes}</td>\n              <td>percent FetalErythrocytes</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Hemoglobin}</td>\n              <td>percent Hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{HemoglobinA1C}</td>\n              <td>percent HemoglobinA1C</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{HemoglobinSaturation}</td>\n              <td>percent HemoglobinSaturation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Hemolysis}</td>\n              <td>percent Hemolysis</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{HumanResponse}</td>\n              <td>percent HumanResponse</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Index}</td>\n              <td>percent Index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Inhibition}</td>\n              <td>percent Inhibition</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Live}</td>\n              <td>percent Live</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Negative Control}</td>\n              <td>percent Negative Control</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Normal}</td>\n              <td>percent Normal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{NormalControl}</td>\n              <td>percent NormalControl</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{NormalPooledPlasma}</td>\n              <td>percent NormalPooledPlasma</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{ofAvailable}</td>\n              <td>percent ofAvailable</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{ofBacteria}</td>\n              <td>percent ofBacteria</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{OfLymphocytes}</td>\n              <td>percent OfLymphocytes</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{OfWBCs}</td>\n              <td>percent OfWBCs</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Oxygen}</td>\n              <td>percent Oxygen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Positive}</td>\n              <td>percent Positive</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Precipitate}</td>\n              <td>percent Precipitate</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Reactivity}</td>\n              <td>percent Reactivity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{response}</td>\n              <td>percent response</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{risk}</td>\n              <td>percent risk</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{SpermMotility}</td>\n              <td>percent SpermMotility</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Total}</td>\n              <td>percent Total</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{TotalProtein}</td>\n              <td>percent TotalProtein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Tot'Cholesterol}</td>\n              <td>percent Tot'Cholesterol</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Tot'Hgb}</td>\n              <td>percent Tot'Hgb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Uptake}</td>\n              <td>percent Uptake</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{vol}</td>\n              <td>VolumePercent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{WeightToWeight}</td>\n              <td>percent WeightToWeight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/(12.h)</td>\n              <td>per 12 * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[arb'U]</td>\n              <td>per arbitrary unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[HPF]</td>\n              <td>per high power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[iU]</td>\n              <td>per international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[LPF]</td>\n              <td>per low power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/{Entity}</td>\n              <td>per Entity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[HPF]</td>\n              <td>per hpf</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[LPF]</td>\n              <td>per LPF</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/{oif}</td>\n              <td>per oif</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/{Specimen}</td>\n              <td>per Specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/{tot}</td>\n              <td>per tot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*10</td>\n              <td>PerTenGiga</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*12</td>\n              <td>PerTrillion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*12{rbc}</td>\n              <td>PerTrillionRedBloodCells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*6</td>\n              <td>PerMillion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*9</td>\n              <td>PerBillion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100</td>\n              <td>per 100</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100{cells}</td>\n              <td>per 100 cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100{neutrophils}</td>\n              <td>per 100 neutrophils</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100{spermatozoa}</td>\n              <td>per 100 spermatozoa</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100{WBC}</td>\n              <td>Per100WBC</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100{WBCs}</td>\n              <td>Per100WBC</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/a</td>\n              <td>/ year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/cm[H2O]</td>\n              <td>per centimeter of water</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/d</td>\n              <td>per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/dL</td>\n              <td>per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g</td>\n              <td>per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{creat}</td>\n              <td>per gram creat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{hgb}</td>\n              <td>per gram hgb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{tot'nit}</td>\n              <td>per gram tot'nit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{tot'prot}</td>\n              <td>per gram tot'prot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{wet'tis}</td>\n              <td>per gram wet'tis</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/h</td>\n              <td>per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/kg</td>\n              <td>per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/kg{body'wt}</td>\n              <td>per kilogram body wt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/L</td>\n              <td>per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/m2</td>\n              <td>per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mg</td>\n              <td>per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/min</td>\n              <td>per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mL</td>\n              <td>per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mm3</td>\n              <td>per cubic millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mmol</td>\n              <td>per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mo</td>\n              <td>per month</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/s</td>\n              <td>per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/U</td>\n              <td>per enzyme unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/ug</td>\n              <td>per microgram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/uL</td>\n              <td>per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/wk</td>\n              <td>per week</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[APL'U]</td>\n              <td>IgA anticardiolipin unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[APL'U]/mL</td>\n              <td>IgA anticardiolipin unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[arb'U]</td>\n              <td>arbitrary unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[arb'U]/L</td>\n              <td>arbitary unit / liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[arb'U]/mL</td>\n              <td>arbitrary unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[AU]</td>\n              <td>allergy unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[BAU]</td>\n              <td>bioequivalent allergen unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[beth'U]</td>\n              <td>Bethesda unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[beth'U]</td>\n              <td>Bethesda unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[CFU]</td>\n              <td>colony forming unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[CFU]/L</td>\n              <td>colony forming unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[CFU]/mL</td>\n              <td>colony forming unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Ch]</td>\n              <td>French (catheter gauge)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cin_i]</td>\n              <td>cubic inch</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cup_us]</td>\n              <td>cup</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[degF]</td>\n              <td>degree Fahrenheit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[dr_av]</td>\n              <td>Dram (US and British)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[drp]</td>\n              <td>drop</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[drp]/[HPF]</td>\n              <td>drop / HPF</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[drp]/h</td>\n              <td>drop / hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[drp]/min</td>\n              <td>drop / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[drp]/mL</td>\n              <td>drop / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[drp]/s</td>\n              <td>drop / second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[fdr_us]</td>\n              <td>fluid dram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[foz_br]</td>\n              <td>fluid ounce</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[foz_us]</td>\n              <td>fluid ounce</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ft_i]</td>\n              <td>Feet</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[fth_i]</td>\n              <td>fathom</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[gal_br]</td>\n              <td>gallon</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[gal_us]</td>\n              <td>Queen Anne's wine gallon</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[GPL'U]</td>\n              <td>IgG anticardiolipin unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[gr]</td>\n              <td>grain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[in_i]</td>\n              <td>inch (international)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]</td>\n              <td>international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/(2.h)</td>\n              <td>international unit per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/(24.h)</td>\n              <td>international unit per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/10*9{RBCs}</td>\n              <td>international unit per billion red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/d</td>\n              <td>international unit per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/dL</td>\n              <td>international unit per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/g</td>\n              <td>international unit per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/g{Hb}</td>\n              <td>international unit per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]/g{Hgb}</td>\n              <td>international unit / gram Hgb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/h</td>\n              <td>international unit per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/kg</td>\n              <td>international unit per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/kg/d</td>\n              <td>international unit per kilogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/L</td>\n              <td>international unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/min</td>\n              <td>international unit per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/mL</td>\n              <td>international unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lb_av]</td>\n              <td>pound (US and British)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mi_i]</td>\n              <td>statute mile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mi_us]</td>\n              <td>mile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[min_us]</td>\n              <td>minim</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[MPL'U]</td>\n              <td>IgM anticardiolipin unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[nmi_i]</td>\n              <td>nautical mile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[oz_av]</td>\n              <td>ounce (US and British)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[oz_tr]</td>\n              <td>ounce</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pH]</td>\n              <td>pH</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pi].rad/min</td>\n              <td>the number pi * radian / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ppb]</td>\n              <td>part per billion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ppm]</td>\n              <td>part per million</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ppm]{v/v}</td>\n              <td>part per million in volume per volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pptr]</td>\n              <td>part per trillion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ppth]</td>\n              <td>parts per thousand</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pptr]</td>\n              <td>parts per trillion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[psi]</td>\n              <td>pound per square inch</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pt_br]</td>\n              <td>pint</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[qt_br]</td>\n              <td>quart</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[qt_us]</td>\n              <td>quart</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[sft_i]</td>\n              <td>square foot (international)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[sin_i]</td>\n              <td>square inch (international)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ston_av]</td>\n              <td>short ton U.S. ton</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[syd_i]</td>\n              <td>square yard</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[tbs_us]</td>\n              <td>tablespoon (US)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[tb'U]</td>\n              <td>tuberculin unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[todd'U]</td>\n              <td>Todd unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[todd'U]</td>\n              <td>Todd unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[tsp_us]</td>\n              <td>teaspoon</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[yd_i]</td>\n              <td>yard</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{# of calculi}</td>\n              <td># of calculi</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{# of donor informative markers}</td>\n              <td># of donor informative markers</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{# of fetuses}</td>\n              <td># of fetuses</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{# of informative markers}</td>\n              <td># of informative markers</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}</td>\n              <td>#</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{2 or 3 times}/d</td>\n              <td>2 or 3 times / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{3 times}/d</td>\n              <td>3 times / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{4 times}/d</td>\n              <td>4 times / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{5 times}/d</td>\n              <td>5 times / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{absorbance}</td>\n              <td>absorbance</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Absorbance'U}</td>\n              <td>Absorbance'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Absorbance'U}/mL</td>\n              <td>Absorbance'U / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{activity}</td>\n              <td>activity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ActivityCoefficient}</td>\n              <td>ActivityCoefficient</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{AHF'U}</td>\n              <td>AHF'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{AntibodyResponse'U}</td>\n              <td>AntibodyResponse'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Applicator}</td>\n              <td>Applicator</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{APS'U}</td>\n              <td>IgA antiphosphatidylserine unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{AspirinReaction'U}</td>\n              <td>AspirinReaction'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Bead}</td>\n              <td>Bead</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Beats}/min</td>\n              <td>Beats / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Bottle}</td>\n              <td>Bottle</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Bowls}/d</td>\n              <td>Bowls / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Breaths}/min</td>\n              <td>Breaths / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CAE'U}</td>\n              <td>complement activity enzyme unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CagRepeat}</td>\n              <td>CagRepeat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Can}</td>\n              <td>Can</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Cans}/wk</td>\n              <td>Cans / week</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Capsule}</td>\n              <td>Capsule</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Cell}</td>\n              <td>Cell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{cells}</td>\n              <td>cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{cells}/[HPF]</td>\n              <td>cells per high power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Cells}/mL</td>\n              <td>Cells / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{cells}/uL</td>\n              <td>cells per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CfTiter}</td>\n              <td>CfTiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{cfu}</td>\n              <td>cfu</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{cfu}/mL</td>\n              <td>cfu / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CGG_repeats}</td>\n              <td>CGG_repeats</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CGG}</td>\n              <td>CGG</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CH100'U}</td>\n              <td>complement CH100 unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{clock time}</td>\n              <td>clock time</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{clock_time}</td>\n              <td>clock_time</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ComplementActivityEnzyme'U}</td>\n              <td>ComplementActivityEnzyme'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ComplementCH100'U}</td>\n              <td>ComplementCH100'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ComplementCH50'U}</td>\n              <td>ComplementCH50'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{copies}/mL</td>\n              <td>copies per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{copies}/ug</td>\n              <td>copies per microgram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Copies}/uL</td>\n              <td>Copies / microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Count}</td>\n              <td>Count</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Counts}/min</td>\n              <td>Counts / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Dalton}</td>\n              <td>Dalton</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{DdTiter}</td>\n              <td>DdTiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{DeltaOpticalDensity}</td>\n              <td>DeltaOpticalDensity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Dilution}</td>\n              <td>dilution</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Disintegrations}/min</td>\n              <td>Disintegrations / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Dose}</td>\n              <td>Dose</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Drinks}/d</td>\n              <td>Drinks / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Each}</td>\n              <td>Each</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}</td>\n              <td>Ehrlich unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}/(2.h)</td>\n              <td>Ehrlich unit per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}/100.g</td>\n              <td>Ehrlich unit per 100 gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}/d</td>\n              <td>Ehrlich unit per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}/dL</td>\n              <td>Ehrilich unit per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}/mL</td>\n              <td>Ehrlich'U / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EIAIndex}</td>\n              <td>EIA index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EIATiter}</td>\n              <td>EIA titer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EIA'U}</td>\n              <td>EIA unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EIA'U}/U</td>\n              <td>EIA unit per enzyme Unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ElisaIndex}</td>\n              <td>ElisaIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ELISA'U}</td>\n              <td>ELISA unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Elisa'U}/mL</td>\n              <td>Elisa'U / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ElisaValue}</td>\n              <td>ElisaValue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ERY}/uL</td>\n              <td>erythrocyte per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Events}</td>\n              <td>Events</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{FluorescenceIntensity'U}</td>\n              <td>FluorescenceIntensity'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U{G}</td>\n              <td>G unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{GliadinIndexValue}</td>\n              <td>GliadinIndexValue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{G-PortionPhospholipids}</td>\n              <td>G-PortionPhospholipids</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{HaTiter}</td>\n              <td>HaTiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IfaIndex}</td>\n              <td>IfaIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IfaTiter}</td>\n              <td>IfaTiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IgAAntiphosphatidyleserine'U}</td>\n              <td>IgAAntiphosphatidyleserine'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IgAPhospholipid'U}</td>\n              <td>IgAPhospholipid'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IgGAntiphosphatidyleserine'U}</td>\n              <td>IgGAntiphosphatidyleserine'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IgGIndex}</td>\n              <td>IgGIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IgMAntiphosphatidyleserine'U}</td>\n              <td>IgMAntiphosphatidyleserine'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IgMIndex}</td>\n              <td>IgMIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ImmuneComplex'U}</td>\n              <td>immune complex unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ImmuneStatusRatio}</td>\n              <td>ImmuneStatusRatio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Immunity}</td>\n              <td>Immunity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Index_val}</td>\n              <td>Index_val</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{index}</td>\n              <td>index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IndexValue}</td>\n              <td>IndexValue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{InhaledTobaccoUseAmountYears}</td>\n              <td>InhaledTobaccoUseAmountYears</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{InhaledTobaccoUsePacks}/d</td>\n              <td>InhaledTobaccoUsePacks / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{INR}</td>\n              <td>international normalized ratio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{INR'unit}</td>\n              <td>INR'unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{JDF'U}</td>\n              <td>Juvenile Diabetes Foundation unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{JDF'U}/L</td>\n              <td>Juvenile Diabetes Foundation unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{JuvenileDiabetesFound'U}</td>\n              <td>JuvenileDiabetesFound'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{KCT'U}</td>\n              <td>kaolin clotting time</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{KRONU'U}/L</td>\n              <td>Kronus unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{KRONU'U}/mL</td>\n              <td>Kronus unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{lgCopies}/ml</td>\n              <td>lgCopies / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{log_copies}/mL</td>\n              <td>log (base 10) copies per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{log_IU}/mL</td>\n              <td>log (base 10) international unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{LymeIndexValue}</td>\n              <td>LymeIndexValue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{M.o.M.}</td>\n              <td>M.o.M.</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{M.o.M}</td>\n              <td>multiple of the median</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Markers}</td>\n              <td>Markers</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{minidrp}</td>\n              <td>minidrp</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Molecule}/{Platelet}</td>\n              <td>Molecule / Platelet</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{M-PortionPhospholipids}</td>\n              <td>M-PortionPhospholipids</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{MPS'U}</td>\n              <td>IgM antiphosphatidylserine unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{MPS'U}/mL</td>\n              <td>IgM antiphosphatidylserine unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{MultOfMean}</td>\n              <td>MultOfMean</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{NonspecificOunce}</td>\n              <td>NonspecificOunce</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Number}</td>\n              <td>Number</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{OD_unit}</td>\n              <td>optical density unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Once}/d</td>\n              <td>Once / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{OpticalDensity}</td>\n              <td>OpticalDensity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{OpticalDensityIndex}</td>\n              <td>OpticalDensityIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{OpticalDensityRatio}</td>\n              <td>OpticalDensityRatio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{P2Y12 Reaction Units}</td>\n              <td>P2Y12 Reaction Units</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Package}</td>\n              <td>Package</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Packs}/d</td>\n              <td>Packs / day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{PackYears}</td>\n              <td>PackYears</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Patch}</td>\n              <td>Patch</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Percentile}</td>\n              <td>Percentile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Pill}</td>\n              <td>Pill</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Pouches}/wk</td>\n              <td>Pouches / week</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{RadioactiveT3UptakeRatio}</td>\n              <td>RadioactiveT3UptakeRatio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ratio}</td>\n              <td>ratio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{RBC}/uL</td>\n              <td>red blood cell per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{RecTiter}</td>\n              <td>RecTiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Relative'U}</td>\n              <td>Relative'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{RelativeViscosity}</td>\n              <td>RelativeViscosity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{RPI'U}</td>\n              <td>RPI'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{RubellaVirus}</td>\n              <td>RubellaVirus</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{SatIndex}</td>\n              <td>SatIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Scoop}</td>\n              <td>Scoop</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ScoreOf}</td>\n              <td>ScoreOf</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{shift}</td>\n              <td>shift</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{spermatozoa}/mL</td>\n              <td>spermatozoa per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{spray}</td>\n              <td>spray</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{StandardDeviation}</td>\n              <td>StandardDeviation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{StandardIgA'U}</td>\n              <td>StandardIgA'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{StandardIgG'U}</td>\n              <td>StandardIgG'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{StandardIgM'U}</td>\n              <td>StandardIgM'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{StdDeviation'U}</td>\n              <td>StdDeviation'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{StimulatingIndex}</td>\n              <td>StimulatingIndex</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Streptozyme'U}</td>\n              <td>Streptozyme'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ThyroxinUptake'U}</td>\n              <td>ThyroxinUptake'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{TIBC'U}</td>\n              <td>TIBC'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Times}/wk</td>\n              <td>Times / week</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Tine'U}</td>\n              <td>Tine'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{titer}</td>\n              <td>titer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ToxoplasmaIndexValue}</td>\n              <td>ToxoplasmaIndexValue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Vial}</td>\n              <td>Vial</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Volume}/{Vvolume}</td>\n              <td>Volume / Vvolume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{WeeksDays}</td>\n              <td>WeeksDays</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{WhiteBloodCell}</td>\n              <td>WhiteBloodCell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>1/d</td>\n              <td>one per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>1/min</td>\n              <td>one per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*12/L</td>\n              <td>trillion per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3</td>\n              <td>Thousand</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3.{RBC}</td>\n              <td>Thousand Red Blood Cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3.U</td>\n              <td>Thousand Per * Unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3/L</td>\n              <td>Thousand Per Liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3/mL</td>\n              <td>Thousand Per MilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3/uL</td>\n              <td>Thousands Per MicroLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3{Copies}/mL</td>\n              <td>Thousand Copies Per MilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*-3{Polarization'U}</td>\n              <td>(the number ten for arbitrary powers ^ -3) Polarization'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*5</td>\n              <td>OneHundredThousand</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6</td>\n              <td>Million</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6.[iU]</td>\n              <td>MillionInternationalUnit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6.eq/mL</td>\n              <td>MillionEquivalentsPerMilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6.U</td>\n              <td>(the number ten for arbitrary powers ^ 6) * Unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/{Specimen}</td>\n              <td>MillionPerSpecimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/kg</td>\n              <td>million per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/L</td>\n              <td>million per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/mL</td>\n              <td>million per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/mm3</td>\n              <td>(the number ten for arbitrary powers ^ 6) / (millimeter ^ 3)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/uL</td>\n              <td>million per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*-6{Immunofluorescence'U}</td>\n              <td>(the number ten for arbitrary powers ^ -6) Immunofluorescence'U</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*8</td>\n              <td>TenToEighth</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*9/L</td>\n              <td>billion per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*9/mL</td>\n              <td>billion per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*9/uL</td>\n              <td>billion per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10.L/(min.m2)</td>\n              <td>10 liter per minute per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10.L/min</td>\n              <td>10 liter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10.uN.s/(cm.m2)</td>\n              <td>10 * microNewton * second / centimeter * (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10.uN.s/cm</td>\n              <td>10 * microNewton * second / centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10.uN.s/cm2</td>\n              <td>10 * microNewton * second / (centimeter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>a</td>\n              <td>year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>A/m</td>\n              <td>Ampère / meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>att</td>\n              <td>technical atmosphere</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>bar</td>\n              <td>bar</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Cel</td>\n              <td>degree Celsius</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cg</td>\n              <td>centigram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cL</td>\n              <td>centiliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm</td>\n              <td>centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm[H2O]</td>\n              <td>centimeter of water</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm[H2O]/(s.m)</td>\n              <td>centimeter of water column / second * meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm[H2O]/L/s</td>\n              <td>centimeter of water per liter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm[Hg]</td>\n              <td>centimeter of mercury</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm2</td>\n              <td>square centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm2/s</td>\n              <td>square centimeter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm3</td>\n              <td>cubic centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cP</td>\n              <td>centiPoise</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cSt</td>\n              <td>centiStokes</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>d</td>\n              <td>day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dB</td>\n              <td>decibel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>deg</td>\n              <td>degree</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>deg/s</td>\n              <td>degree per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dg</td>\n              <td>decigram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dL</td>\n              <td>deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dm</td>\n              <td>decimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dm2/s2</td>\n              <td>square decimeter per square second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>eq</td>\n              <td>equivalents</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>eq/L</td>\n              <td>equivalents / liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>eq/mL</td>\n              <td>equivalents / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>eq/mmol</td>\n              <td>equivalents / millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>eq/umol</td>\n              <td>equivalents / micromole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>erg</td>\n              <td>erg</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>eV</td>\n              <td>electronvolt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fg</td>\n              <td>femtogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fL</td>\n              <td>femtoliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fL/nL</td>\n              <td>femtoliter / nanoliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fm</td>\n              <td>femtometer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol</td>\n              <td>femtomole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol/g</td>\n              <td>femtomole per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol/L</td>\n              <td>femtomole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol/mg</td>\n              <td>femtomole / milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol/mL</td>\n              <td>femtomole / milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g</td>\n              <td>gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g.m</td>\n              <td>gram * meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g.m/({hb}.m2)</td>\n              <td>gram * meter / hb * (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g.m/{hb}</td>\n              <td>gram * meter / hb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(100.g)</td>\n              <td>gram per 100 gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(12.h)</td>\n              <td>gram per 12 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(24.h)</td>\n              <td>gram per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(3.d)</td>\n              <td>gram per 3 days</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(4.h)</td>\n              <td>gram per 4 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(48.h)</td>\n              <td>gram per 48 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(5.h)</td>\n              <td>gram per 5 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(6.h)</td>\n              <td>gram per 6 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(72.h)</td>\n              <td>gram per 72 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(8.h)</td>\n              <td>gram / 8 * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(8.kg.h)</td>\n              <td>gram / 8 * kilogram * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(kg.h)</td>\n              <td>gram / kilogram * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(kg.min)</td>\n              <td>gram / kilogram * minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/{TotalWeight}</td>\n              <td>gram / TotalWeight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/d</td>\n              <td>gram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/dL</td>\n              <td>gram per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/g</td>\n              <td>gram per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/g{Cre}</td>\n              <td>gram / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/g{creat}</td>\n              <td>gram / gram creat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/g{tissue}</td>\n              <td>gram per gram of tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/h</td>\n              <td>gram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/h/m2</td>\n              <td>gram per hour per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/kg</td>\n              <td>gram per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/kg/d</td>\n              <td>gram per kilogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/L</td>\n              <td>gram per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/m2</td>\n              <td>grams Per Square Meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/mg</td>\n              <td>gram per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/min</td>\n              <td>gram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/mL</td>\n              <td>gram per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/mmol</td>\n              <td>gram per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/mmol{creat}</td>\n              <td>gram / millimole creat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/mol</td>\n              <td>gram per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>GBq</td>\n              <td>gigaBecquerel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>h</td>\n              <td>hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>hL</td>\n              <td>hectoliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Hz</td>\n              <td>Hertz</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]</td>\n              <td>international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>J</td>\n              <td>joule</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>J/L</td>\n              <td>joule per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>K</td>\n              <td>Kelvin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>K/W</td>\n              <td>Kelvin / Watt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>k[IU]/L</td>\n              <td>kilo international unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>k[IU]/mL</td>\n              <td>kilo international unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kat/kg</td>\n              <td>katal / kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kat/L</td>\n              <td>katal / liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kBq</td>\n              <td>kiloBecquerel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kcal</td>\n              <td>kilocalorie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kcal/(8.h)</td>\n              <td>kilocalorie / 8 * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kcal/h</td>\n              <td>kilocalorie per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg</td>\n              <td>kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg.m/s</td>\n              <td>kilogram meter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/(s.m2)</td>\n              <td>kilogram per second per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/h</td>\n              <td>kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/L</td>\n              <td>kilogram per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/m2</td>\n              <td>kilogram / (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/m3</td>\n              <td>kilogram / (meter ^ 3)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/min</td>\n              <td>kilogram / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/mol</td>\n              <td>kilogram per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg/s</td>\n              <td>kilogram / second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kL</td>\n              <td>kiloliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>km</td>\n              <td>kilometer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kPa</td>\n              <td>kiloPascal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ks</td>\n              <td>kilosecond</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kU/g</td>\n              <td>kiloenzyme Unit per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kU/h</td>\n              <td>kiloUnit / hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kU/L</td>\n              <td>kiloenzyme Unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kU/mL</td>\n              <td>kilo enzyme unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L</td>\n              <td>liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L.s2/s</td>\n              <td>liter * (second ^ 2) / second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/(8.h)</td>\n              <td>liter per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/(min.m2)</td>\n              <td>liter per minute per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/d</td>\n              <td>liter per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/h</td>\n              <td>liter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/kg</td>\n              <td>liter per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/L</td>\n              <td>liter per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/min</td>\n              <td>liter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/s</td>\n              <td>liter / second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>lm/m2</td>\n              <td>lumen / (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m</td>\n              <td>meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m/s</td>\n              <td>meter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m/s2</td>\n              <td>meter per square second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m[iU]</td>\n              <td>milliinternational unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m[IU]/L</td>\n              <td>milli international unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m[IU]/mL</td>\n              <td>milli international unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m2</td>\n              <td>square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m2/s</td>\n              <td>square meter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m3/s</td>\n              <td>cubic meter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mA</td>\n              <td>milliAmpère</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mbar</td>\n              <td>millibar</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mbar.s/L</td>\n              <td>millibar second per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>MBq</td>\n              <td>megaBecquerel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mCi</td>\n              <td>milliCurie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq</td>\n              <td>milliequivalent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/(12.h)</td>\n              <td>milliequivalent per 12 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/(2.h)</td>\n              <td>milliequivalent per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/(24.h)</td>\n              <td>milliequivalent per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/(8.h)</td>\n              <td>milliequivalent per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/(8.h.kg)</td>\n              <td>milliequivalents / 8 * hour * kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/(kg.d)</td>\n              <td>milliequivalents / kilogram * day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/{Specimen}</td>\n              <td>milliequivalents / Specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/d</td>\n              <td>milliequivalent per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/dL</td>\n              <td>milliequivalent per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/g</td>\n              <td>milliequivalent per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/g{Cre}</td>\n              <td>milliequivalents / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/h</td>\n              <td>milliequivalent per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/kg</td>\n              <td>milliequivalent per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/kg/h</td>\n              <td>milliequivalent per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/kg/min</td>\n              <td>milliequivalents / kilogram / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/L</td>\n              <td>milliequivalent per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/m2</td>\n              <td>milliequivalent per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/min</td>\n              <td>milliequivalent per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/mL</td>\n              <td>milliequivalent per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg</td>\n              <td>milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(10.h)</td>\n              <td>milligram per 10 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(12.h)</td>\n              <td>milligram per 12 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(18.h)</td>\n              <td>milligram per 18 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(2.h)</td>\n              <td>milligram per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(24.h)</td>\n              <td>milligram per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(72.h)</td>\n              <td>milligram per 72 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(8.h)</td>\n              <td>milligram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(8.h.kg)</td>\n              <td>milligram / 8 * hour * kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(kg.h)</td>\n              <td>milligram / kilogram * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{Hgb}/g</td>\n              <td>milligram / Hgb / gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{Specimen}</td>\n              <td>milligram / Specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{Tot'Volume}</td>\n              <td>milligram / Tot'Volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{Volume}</td>\n              <td>milligram / Volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/d</td>\n              <td>milligram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/d/(173.10*-2.m2)</td>\n              <td>milligram / day / 173 * (the number ten for arbitrary powers ^ -2) * (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/dL</td>\n              <td>milligram per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g</td>\n              <td>milligram per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g{Cre}</td>\n              <td>milligram / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g{creat}</td>\n              <td>milligram per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/h</td>\n              <td>milligram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/kg</td>\n              <td>milligram per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/kg/(24.h)</td>\n              <td>milligram / kilogram / 24 * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/kg/d</td>\n              <td>milligram per kilogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/kg/min</td>\n              <td>milligram per kilogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/L</td>\n              <td>milligram per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/m2</td>\n              <td>milligram per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/m3</td>\n              <td>milligram per cubic meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mg</td>\n              <td>milligram per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mg{cre}</td>\n              <td>milligram / milligram cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/min</td>\n              <td>milligram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mL</td>\n              <td>milligram per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mmol</td>\n              <td>milligram per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mmol{Cre}</td>\n              <td>milligram / millimole Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mmol{creat}</td>\n              <td>milligram per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/wk</td>\n              <td>milligram per week</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg{Phenylketones}/dL</td>\n              <td>milligram Phenylketones / deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>min</td>\n              <td>minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL</td>\n              <td>milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/({h'b}.m2)</td>\n              <td>milliliter / h'b * (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(10.h)</td>\n              <td>milliliter per 10 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(12.h)</td>\n              <td>milliliter per 12 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(2.h)</td>\n              <td>milliliter per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(24.h)</td>\n              <td>milliliter per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(4.h)</td>\n              <td>milliliter per 4 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(72.h)</td>\n              <td>milliliter per 72 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(8.h)</td>\n              <td>milliliter per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(kg.min)</td>\n              <td>milliliter / kilogram * minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/[sin_i]</td>\n              <td>milliliter per square inch (international)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/{h'b}</td>\n              <td>MilliLitersPerHeartbeat [SI Volume Units]</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/cm[H2O]</td>\n              <td>milliliter / centimeter of water column</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/d</td>\n              <td>milliliter per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/dL</td>\n              <td>milliliter per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/h</td>\n              <td>milliliter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/kg</td>\n              <td>milliliter per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/kg/(8.h)</td>\n              <td>milliliter per kilogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/kg/d</td>\n              <td>milliliter per kilogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/kg/h</td>\n              <td>milliliter per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/kg/min</td>\n              <td>milliliter per kilogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/L</td>\n              <td>milliliter per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/m2</td>\n              <td>milliliter per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/mbar</td>\n              <td>milliliter per millibar</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/min</td>\n              <td>milliliter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/min/(173.10*-2.m2)</td>\n              <td>milliliter / minute / 173 * (the number ten for arbitrary powers ^ -2) * (meter ^ 2)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/min/{1.73_m2}</td>\n              <td>milliliter per minute per 1.73 square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/min/m2</td>\n              <td>milliliter per minute per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/mm</td>\n              <td>milliliter per millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/s</td>\n              <td>milliliter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm</td>\n              <td>millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm/h</td>\n              <td>millimeter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm/min</td>\n              <td>millimeter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm[H2O]</td>\n              <td>millimeter of water</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm[Hg]</td>\n              <td>millimeter of mercury</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm2</td>\n              <td>square millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mm3</td>\n              <td>cubic millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol</td>\n              <td>millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(12.h)</td>\n              <td>millimole per 12 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(18.h)</td>\n              <td>millimole per 18 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(2.h)</td>\n              <td>millimole per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(24.h)</td>\n              <td>millimole per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(6.h)</td>\n              <td>millimole per 6 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(8.h)</td>\n              <td>millimole per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(8.h.kg)</td>\n              <td>millimole / 8 * hour * kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/{Tot'Volume}</td>\n              <td>millimole / Tot'Volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/d</td>\n              <td>millimole per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/dL</td>\n              <td>millimole per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/g</td>\n              <td>millimole per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/g{creat}</td>\n              <td>millimole per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/g{hemoglobin}</td>\n              <td>millimole per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/h</td>\n              <td>millimole per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/h/mg{Hb}</td>\n              <td>millimole per hour per milligram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/h/mg{protein}</td>\n              <td>millimole per hour per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/kg</td>\n              <td>millimole per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/kg/d</td>\n              <td>millimole per kilogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/kg/h</td>\n              <td>millimole per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/kg/min</td>\n              <td>millimole per kilogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/kg{H2O}</td>\n              <td>millimole per kilogram of water</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/L</td>\n              <td>millimole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/L/s</td>\n              <td>millimole per liter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/m</td>\n              <td>millimole / meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/m2</td>\n              <td>millimole per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/min</td>\n              <td>millimole per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/mmol</td>\n              <td>millimole per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/mol</td>\n              <td>millimole per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/mol{creat}</td>\n              <td>millimole per mole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/s/L</td>\n              <td>millimole per second per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mo</td>\n              <td>month</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol</td>\n              <td>mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/d</td>\n              <td>mole per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/kg</td>\n              <td>mole per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/kg/s</td>\n              <td>mole per kilogram per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/L</td>\n              <td>mole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/m3</td>\n              <td>mole per cubic meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/mL</td>\n              <td>mole per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/mol</td>\n              <td>mole per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/mol{creat}</td>\n              <td>mole / mole creat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mol/s</td>\n              <td>mole per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mosm</td>\n              <td>milliosmole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mosm/kg</td>\n              <td>milliosmole per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mosm/L</td>\n              <td>milliosmole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mPa</td>\n              <td>millipascal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ms</td>\n              <td>millisecond</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU</td>\n              <td>millienzyme Unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/g</td>\n              <td>millienzyme Unit per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/g{Hgb}</td>\n              <td>milliUnit / gram Hgb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/L</td>\n              <td>millienzyme Unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mg</td>\n              <td>milliUnit / milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mg{Cre}</td>\n              <td>milliUnit / milligram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/min</td>\n              <td>milliUnit / minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mL</td>\n              <td>millienzyme Unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mL/min</td>\n              <td>millienzyme Unit per milliliter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mmol{creatinine}</td>\n              <td>millienzyme Unit per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mmol{RBCs}</td>\n              <td>millienzyme Unit per millimole of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mV</td>\n              <td>milliVolt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>N</td>\n              <td>Newton</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>N.cm</td>\n              <td>Newton centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>N.s</td>\n              <td>Newton second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nCi</td>\n              <td>nanoCurie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng</td>\n              <td>nanogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/(24.h)</td>\n              <td>nanogram per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/(8.h)</td>\n              <td>nanogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/(8.h.kg)</td>\n              <td>nanogram / 8 * hour * kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/(kg.d)</td>\n              <td>nanogram / kilogram * day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/(kg.h)</td>\n              <td>nanogram / kilogram * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/(kg.min)</td>\n              <td>nanogram / kilogram * minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/10*6</td>\n              <td>nanogram per million</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/d</td>\n              <td>nanogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/dL</td>\n              <td>nanogram per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/dL/h</td>\n              <td>nanogram / deciliter / hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/g</td>\n              <td>nanogram per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/g{Cre}</td>\n              <td>nanogram / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/g{creat}</td>\n              <td>nanogram per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/h</td>\n              <td>nanogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/kg</td>\n              <td>nanogram per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/kg/(8.h)</td>\n              <td>nanogram per kilogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/kg/h</td>\n              <td>nanogram per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/kg/min</td>\n              <td>nanogram per kilogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/L</td>\n              <td>nanogram per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/m2</td>\n              <td>nanogram per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mg</td>\n              <td>nanogram per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mg/h</td>\n              <td>nanogram per milligram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mg{Protein}</td>\n              <td>nanogram / milligram Protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/min</td>\n              <td>nanogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mL</td>\n              <td>nanogram per millliiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mL/h</td>\n              <td>nanogram per milliliter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mL{rbc}</td>\n              <td>nanogram / milliliter rbc</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/s</td>\n              <td>nanogram per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nkat</td>\n              <td>nanokatal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nL</td>\n              <td>nanoliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nm</td>\n              <td>nanometer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nm/s/L</td>\n              <td>nanometer per second per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol</td>\n              <td>nanomole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/(24.h)</td>\n              <td>nanomole per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/d</td>\n              <td>nanomole per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/dL</td>\n              <td>nanomole per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/g</td>\n              <td>nanomole per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/g{Cre}</td>\n              <td>nanomole / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/g{creat}</td>\n              <td>nanomole per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/g{dry_wt}</td>\n              <td>nanomole per gram of dry weight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/h/L</td>\n              <td>nanomole per hour per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/h/mg{protein}</td>\n              <td>nanomole per hour per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/h/mL</td>\n              <td>nanomole per hour per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/L</td>\n              <td>nanomole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/L/mmol{creat}</td>\n              <td>nanomole per liter per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/L/s</td>\n              <td>nanomole per liter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/L{RBCs}</td>\n              <td>nanomole per liter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/m/mg{protein}</td>\n              <td>nanomole per meter per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mg</td>\n              <td>nanomole per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mg/h</td>\n              <td>nanomole per milligram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/min/mg{hemoglobin}</td>\n              <td>nanomole per minute per milligram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/min/mg{protein}</td>\n              <td>nanomole per minute per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/min/mL</td>\n              <td>nanomole per minute per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mL</td>\n              <td>nanomole per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mL/h</td>\n              <td>nanomole per milliliter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mL/min</td>\n              <td>nanomole per milliliter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mmol</td>\n              <td>nanomole per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mmol{Cre}</td>\n              <td>nanomole / millimole Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mmol{creat}</td>\n              <td>nanomole per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mol</td>\n              <td>nanomole per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/nmol</td>\n              <td>nanomole per nanomole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/s</td>\n              <td>nanomole per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/s/L</td>\n              <td>nanomole per second per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/umol{creat}</td>\n              <td>nanomole per micromole  of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ns</td>\n              <td>nanosecond</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Ohm</td>\n              <td>Ohm</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>osm/kg</td>\n              <td>osmole per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>osm/L</td>\n              <td>osmole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Pa</td>\n              <td>Pascal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg</td>\n              <td>picogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/dL</td>\n              <td>picogram per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/L</td>\n              <td>picogram per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/mg</td>\n              <td>picogram per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/mL</td>\n              <td>picogram per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/mm</td>\n              <td>picogram per millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pkat</td>\n              <td>picokatal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pL</td>\n              <td>picoliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pm</td>\n              <td>picometer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol</td>\n              <td>picomole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/d</td>\n              <td>picomole per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/dL</td>\n              <td>picomole per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/g</td>\n              <td>picomole per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/h/mg{protein}</td>\n              <td>picomole per hour per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/h/mL</td>\n              <td>picomole per hour per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/L</td>\n              <td>picomole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/mg{protein}</td>\n              <td>picomole per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/min</td>\n              <td>picomole per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/min/mg{protein}</td>\n              <td>picomole per minute per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/mL</td>\n              <td>picomole per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/mmol</td>\n              <td>picomole per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/mmol{creat}</td>\n              <td>picomole per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/mol</td>\n              <td>picomole per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/umol</td>\n              <td>picomole per micromole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/umol{creat}</td>\n              <td>picomole per micromole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ps</td>\n              <td>picosecond</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pT</td>\n              <td>picotesla</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>s</td>\n              <td>second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>St</td>\n              <td>Stokes</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>t</td>\n              <td>tonne</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U</td>\n              <td>enzyme Unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/(1.h)</td>\n              <td>enzyme Unit per 1 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/(12.h)</td>\n              <td>enzyme unit per 12 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/(18.h)</td>\n              <td>enzyme Unit per 18 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/(2.h)</td>\n              <td>enzyme unit per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/(24.h)</td>\n              <td>enzyme unit per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10*10{cells}</td>\n              <td>enzyme unit per 10 billion cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10*12</td>\n              <td>enzyme unit per trillion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10*6</td>\n              <td>enzyme unit per million</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10*9</td>\n              <td>enzyme unit per billion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/d</td>\n              <td>enzyme unit per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/dL</td>\n              <td>enzyme unit per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g</td>\n              <td>enzyme unit per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g{Cre}</td>\n              <td>Unit / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g{Hb}</td>\n              <td>enzyme unit per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g{hemoglobin}</td>\n              <td>enzyme Unit per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g{Hgb}</td>\n              <td>UnitsPerGramHemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/h</td>\n              <td>enzyme unit per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/kg/h</td>\n              <td>Unit / kilogram / hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/kg{Hb}</td>\n              <td>enzyme unit per kilogram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/kg{hemoglobin}</td>\n              <td>enzyme Unit per kilogram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/L</td>\n              <td>enzyme unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/min</td>\n              <td>enzyme unit per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/mL</td>\n              <td>enzyme unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/mL{RBC}</td>\n              <td>Unit / milliliter RBC</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/mL{RBCs}</td>\n              <td>enzyme unit per milliliter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/mmol{creat}</td>\n              <td>enzyme unit per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/mol</td>\n              <td>enzyme Unit per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/s</td>\n              <td>enzyme unit per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/umol</td>\n              <td>enzyme Unit per micromole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>u[IU]</td>\n              <td>micro international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>u[IU]/L</td>\n              <td>microinternational unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>u[IU]/mL</td>\n              <td>micro international unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ueq</td>\n              <td>microequivalents</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ueq/L</td>\n              <td>microequivalent per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ueq/mL</td>\n              <td>microequivalent per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug</td>\n              <td>microgram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/(24.h)</td>\n              <td>microgram per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/(8.h)</td>\n              <td>microgram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/(kg.d)</td>\n              <td>microgram / kilogram * day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/(kg.h)</td>\n              <td>microgram / kilogram * hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/{Specimen}</td>\n              <td>microgram / Specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/{TotalVolume}</td>\n              <td>MicroGramsPerTotalVolume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/d</td>\n              <td>microgram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/dL</td>\n              <td>microgram per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/dL{rbc}</td>\n              <td>microgram / deciliter rbc</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g</td>\n              <td>microgram per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{Cre}</td>\n              <td>microgram / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{creat}</td>\n              <td>microgram per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{DryWeight}</td>\n              <td>microgram / gram DryWeight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{Hgb}</td>\n              <td>microgram / gram Hgb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{Tissue}</td>\n              <td>microgram / gram Tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/h</td>\n              <td>microgram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/kg</td>\n              <td>microgram per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/kg/(8.h)</td>\n              <td>microgram per kilogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/kg/d</td>\n              <td>microgram per kilogram per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/kg/h</td>\n              <td>microgram per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/kg/min</td>\n              <td>microgram per kilogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/L</td>\n              <td>microgram per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/L/(24.h)</td>\n              <td>microgram per liter per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/L{DDU}</td>\n              <td>microgram / liter DDU</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/m2</td>\n              <td>microgram per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mg</td>\n              <td>microgram per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mg{Cre}</td>\n              <td>microgram / milligram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mg{creat}</td>\n              <td>microgram per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/min</td>\n              <td>microgram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mL</td>\n              <td>microgram per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mL{FEU}</td>\n              <td>microgram / milliliter FEU</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mmol</td>\n              <td>microgram per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/ng</td>\n              <td>microgram per nanogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug{T4}/dL</td>\n              <td>microgram T4 / deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ukat</td>\n              <td>microkatal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uL</td>\n              <td>microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uL/(2.h)</td>\n              <td>microliter per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uL/h</td>\n              <td>microliter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>um</td>\n              <td>micrometer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>um/s</td>\n              <td>micrometer per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol</td>\n              <td>micromole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/(24.h)</td>\n              <td>micromole per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/d</td>\n              <td>micromole per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/dL</td>\n              <td>micromole per deciliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/g</td>\n              <td>micromole per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/g{Cre}</td>\n              <td>micromole / gram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/g{creat}</td>\n              <td>micromole per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/g{Hb}</td>\n              <td>micromole per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/g{hemoglobin}</td>\n              <td>micromole per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/g{Hgb}</td>\n              <td>micromole / gram Hgb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/h</td>\n              <td>micromole per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/h/g</td>\n              <td>micromole / hour / gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/h/L</td>\n              <td>micromole per hour per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/h/mg{protein}</td>\n              <td>micromole per hour per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/kg</td>\n              <td>micromole per kilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/L</td>\n              <td>micromole per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/L/h</td>\n              <td>micromole per liter per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/L{rbc}</td>\n              <td>micromole per liter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/m</td>\n              <td>micromole / meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mg</td>\n              <td>micromole per milligram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mg{Cre}</td>\n              <td>micromole / milligram Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/min</td>\n              <td>micromole per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/min/g</td>\n              <td>micromole per minute per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/min/g{prot}</td>\n              <td>micromole / minute / gram prot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/min/g{protein}</td>\n              <td>micromole per minute per gram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/min/L</td>\n              <td>micromole per minute per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mL</td>\n              <td>micromole per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mL/min</td>\n              <td>micromole per milliliter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mmol</td>\n              <td>micromole per millimole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mol</td>\n              <td>micromole per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mol{Cre}</td>\n              <td>micromole / mole Cre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mol{creat}</td>\n              <td>micromole per mole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mol{Hb}</td>\n              <td>micromole per mole of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/umol</td>\n              <td>micromole per micromole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uOhm</td>\n              <td>microOhm</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>us</td>\n              <td>microsecond</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uU</td>\n              <td>microUnit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uU/g</td>\n              <td>micro enzyme unit per gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uU/L</td>\n              <td>micro enzyme unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uU/mL</td>\n              <td>micro enzyme unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uV</td>\n              <td>microvolt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>V</td>\n              <td>volt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>wk</td>\n              <td>week</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10.uN.s/(cm5.m2)</td>\n              <td>10 micronewton second per centimeter to the fifth power per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*4/uL</td>\n              <td>10 thousand per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>24.h</td>\n              <td>24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>A</td>\n              <td>Ampère</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ARU}</td>\n              <td>aspirin response unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>atm</td>\n              <td>standard atmosphere</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ag/{cell}</td>\n              <td>attogram per cell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Bq</td>\n              <td>Becquerel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{binding_index}</td>\n              <td>binding index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[bdsk'U]</td>\n              <td>Bodansky unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CAG_repeats}</td>\n              <td>CAG trinucleotide repeats</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cal</td>\n              <td>calorie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cm[H2O]/s/m</td>\n              <td>centimeter of water per second per meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{delta_OD}</td>\n              <td>change in (delta) optical density</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{copies}</td>\n              <td>copies</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{count}</td>\n              <td>count</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CPM}</td>\n              <td>counts per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{CPM}/10*3{cell}</td>\n              <td>counts per minute per thousand cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>daL/min</td>\n              <td>dekaliter per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>daL/min/m2</td>\n              <td>dekaliter per minute per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{dilution}</td>\n              <td>dilution</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dyn.s/cm</td>\n              <td>dyne second per centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dyn.s/(cm.m2)</td>\n              <td>dyne second per centimeter per square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich'U}/100.g</td>\n              <td>Ehrlich unit per 100 gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EIA_index}</td>\n              <td>EIA index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EIA_titer}</td>\n              <td>EIA titer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EV}</td>\n              <td>EIA value</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10</td>\n              <td>enzyme unit per 10</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10*10</td>\n              <td>enzyme unit per 10 billion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/(10.g){feces}</td>\n              <td>enzyme unit per 10 gram of feces</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g{creat}</td>\n              <td>enzyme unit per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/g{protein}</td>\n              <td>enzyme unit per gram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U{25Cel}/L</td>\n              <td>enzyme unit per liter at 25 deg Celsius</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U{37Cel}/L</td>\n              <td>enzyme unit per liter at 37 deg Celsius</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>U/10*12{RBCs}</td>\n              <td>enzyme unit per trillion red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>F</td>\n              <td>Farad</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol/mg{cytosol_protein}</td>\n              <td>femtomole per milligram of cytosol protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>fmol/mg{protein}</td>\n              <td>femtomole per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{FIU}</td>\n              <td>fluorescent intensity unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{fraction}</td>\n              <td>fraction</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{GAA_repeats}</td>\n              <td>GAA trinucleotide repeats</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{genomes}/mL</td>\n              <td>genomes per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Globules}/[HPF]</td>\n              <td>globules (drops)  per high power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g.m/{beat}</td>\n              <td>gram meter per heart beat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g{creat}</td>\n              <td>gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g{Hb}</td>\n              <td>gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g{total_nit}</td>\n              <td>gram of total nitrogen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g{total_prot}</td>\n              <td>gram of total protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g{wet_tissue}</td>\n              <td>gram of wet tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/kg/(8.h)</td>\n              <td>gram per  kilogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/(8.h){shift}</td>\n              <td>gram per 8 hour shift</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/cm3</td>\n              <td>gram per cubic centimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/g{globulin}</td>\n              <td>gram per gram of globulin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/kg/(8.h){shift}</td>\n              <td>gram per kilogram per 8 hour shift</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/kg/h</td>\n              <td>gram per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/kg/min</td>\n              <td>gram per kilogram per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/mol{creat}</td>\n              <td>gram per mole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/{specimen}</td>\n              <td>gram per specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/{total_output}</td>\n              <td>gram per total output</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g/{total_weight}</td>\n              <td>gram per total weight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Gy</td>\n              <td>Gray</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{beats}/min</td>\n              <td>heart beats per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>H</td>\n              <td>Henry</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[HPF]</td>\n              <td>high power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[GPL'U]/mL</td>\n              <td>IgG anticardiolipin unit per milliliter**</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{GPS'U}</td>\n              <td>IgG antiphosphatidylserine unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[MPL'U]/mL</td>\n              <td>IgM anticardiolipin unit per milliliter**</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ISR}</td>\n              <td>immune status ratio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IFA_index}</td>\n              <td>immunofluorescence assay index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{IFA_titer}</td>\n              <td>Immunofluorescence assay titer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[in_i'H2O]</td>\n              <td>inch (international) of water</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{index_val}</td>\n              <td>index value</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{HA_titer}</td>\n              <td>influenza hemagglutination titer</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]</td>\n              <td>international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/L{37Cel}</td>\n              <td>international unit per liter at 37 degrees Celsius</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[IU]/mg{creat}</td>\n              <td>international unit per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kat</td>\n              <td>katal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kU</td>\n              <td>kilo enzyme unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kU/L{class}</td>\n              <td>kilo enzyme unit per liter class</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kcal/d</td>\n              <td>kilocalorie per day</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kcal/kg/(24.h)</td>\n              <td>kilocalorie per kilogram per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kcal/[oz_av]</td>\n              <td>kilocalorie per ounce (US &amp; British)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ka'U]</td>\n              <td>King Armstrong unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/(24.h)</td>\n              <td>liter per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>L/s/s2</td>\n              <td>liter per second per square second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Log_copies}/mL</td>\n              <td>log (base 10) copies per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Log_IU}</td>\n              <td>log (base 10) international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Log_IU}/mL</td>\n              <td>log (base 10) international unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Log}</td>\n              <td>log base 10</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[LPF]</td>\n              <td>low power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>lm</td>\n              <td>lumen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>lm.m2</td>\n              <td>lumen square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Lyme_index_value}</td>\n              <td>Lyme index value</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mclg'U]</td>\n              <td>Mac Lagan unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Ms</td>\n              <td>megasecond</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{feces}</td>\n              <td>microgram  per gram of feces</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug{FEU}/mL</td>\n              <td>microgram fibrinogen equivalent unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/(100.g)</td>\n              <td>microgram per 100 gram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/m3</td>\n              <td>microgram per cubic meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/dL{RBCs}</td>\n              <td>microgram per deciliter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{dry_tissue}</td>\n              <td>microgram per gram of dry tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{dry_wt}</td>\n              <td>microgram per gram of dry weight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{hair}</td>\n              <td>microgram per gram of hair</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{Hb}</td>\n              <td>microgram per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/g{tissue}</td>\n              <td>microgram per gram of tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/L{RBCs}</td>\n              <td>microgram per liter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mL{class}</td>\n              <td>microgram per milliliter class</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mL{eqv}</td>\n              <td>microgram per milliliter equivalent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/mmol{creat}</td>\n              <td>microgram per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/{specimen}</td>\n              <td>microgram per specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ug/[sft_i]</td>\n              <td>microgram per square foot (international)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol{BCE}/mol</td>\n              <td>micromole bone collagen equivalent per mole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/(2.h)</td>\n              <td>micromole per 2 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/(8.h)</td>\n              <td>micromole per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/dL{GF}</td>\n              <td>micromole per deciliter of glomerular filtrate</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/kg{feces}</td>\n              <td>micromole per kilogram of feces</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/L{RBCs}</td>\n              <td>micromole per liter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/umol{creat}</td>\n              <td>micromole per micromole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mg{creat}</td>\n              <td>micromole per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/mmol{creat}</td>\n              <td>micromole per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>umol/min/g{mucosa}</td>\n              <td>micromole per minute per gram of mucosa</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mmol{creat}</td>\n              <td>milli  enzyme unit per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/g{Hb}</td>\n              <td>milli enzyme unit per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/g{protein}</td>\n              <td>milli enzyme unit per gram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mU/mg{creat}</td>\n              <td>milli enzyme unit per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mbar/L/s</td>\n              <td>millibar per liter per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/g{creat}</td>\n              <td>milliequivalent per gram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/{specimen}</td>\n              <td>milliequivalent per specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>meq/{total_volume}</td>\n              <td>milliequivalent per total volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg{FEU}/L</td>\n              <td>milligram fibrinogen equivalent unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/(6.h)</td>\n              <td>milligram per 6 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{collection}</td>\n              <td>milligram per collection</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/d/{1.73_m2}</td>\n              <td>milligram per day per 1.73 square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/dL{RBCs}</td>\n              <td>milligram per deciliter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g{dry_tissue}</td>\n              <td>milligram per gram of dry tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g{feces}</td>\n              <td>milligram per gram of feces</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g{tissue}</td>\n              <td>milligram per gram of tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/g{wet_tissue}</td>\n              <td>milligram per gram of wet tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/kg/(8.h)</td>\n              <td>milligram per kilogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/kg/h</td>\n              <td>milligram per kilogram per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/L{RBCs}</td>\n              <td>milligram per liter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mg{creat}</td>\n              <td>milligram per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{specimen}</td>\n              <td>milligram per specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{total_output}</td>\n              <td>milligram per total output</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{total_volume}</td>\n              <td>milligram per total volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL{fetal_RBCs}</td>\n              <td>milliliter of fetal red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(5.h)</td>\n              <td>milliliter per 5 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/(6.h)</td>\n              <td>milliliter per 6 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/{beat}</td>\n              <td>milliliter per heart beat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mL/{beat}/m2</td>\n              <td>milliliter per heart beat per  square meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/(5.h)</td>\n              <td>millimole per 5 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/{ejaculate}</td>\n              <td>millimole per ejaculate</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/kg/(8.h)</td>\n              <td>millimole per kilogram per 8 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/L{RBCs}</td>\n              <td>millimole per liter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/mmol{urea}</td>\n              <td>millimole per millimole of urea</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/mmol{creat}</td>\n              <td>millimole per millmole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/{specimen}</td>\n              <td>millimole per specimen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/{total_vol}</td>\n              <td>millimole per total volume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6.[CFU]/L</td>\n              <td>million colony forming unit per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6.[IU]</td>\n              <td>million international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*6/(24.h)</td>\n              <td>million per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mPa.s</td>\n              <td>millipascal second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{minidrop}/min</td>\n              <td>minidrop per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{minidrop}/s</td>\n              <td>minidrop per second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{molecule}/{platelet}</td>\n              <td>molecule per platelet</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{mm/dd/yyyy}</td>\n              <td>month-day-year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{mutation}</td>\n              <td>mutation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nU/mL</td>\n              <td>nanoenzyme unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nU/{RBC}</td>\n              <td>nanoenzyme unit per red blood cell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng{FEU}/mL</td>\n              <td>nanogram fibrinogen equivalent unit per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/U</td>\n              <td>nanogram per enzyme unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mg{creat}</td>\n              <td>nanogram per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mg{protein}</td>\n              <td>nanogram per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/mL{RBCs}</td>\n              <td>nanogram per milliliter of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ng/10*6{RBCs}</td>\n              <td>nanogram per million red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol{BCE}</td>\n              <td>nanomole bone collagen equivalent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol{BCE}/L</td>\n              <td>nanomole bone collagen equivalent per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol{BCE}/mmol{creat}</td>\n              <td>nanomole bone collagen equivalent per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol{1/2cys}/mg{protein}</td>\n              <td>nanomole of 1/2 cystine per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol{ATP}</td>\n              <td>nanomole of ATP</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/dL{GF}</td>\n              <td>nanomole per deciliter of glomerular filtrate</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mg{creat}</td>\n              <td>nanomole per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mg{protein}</td>\n              <td>nanomole per milligram of protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/mg{protein}/h</td>\n              <td>nanomole per milligram of protein per hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/min</td>\n              <td>nanomole per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/min/mg{Hb}</td>\n              <td>nanomole per minute per milligram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>nmol/min/10*6{cells}</td>\n              <td>nanomole per minute per million cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}/[HPF]</td>\n              <td>number per high power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}/L</td>\n              <td>number per liter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}/[LPF]</td>\n              <td>number per low power field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}/uL</td>\n              <td>number per microliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}/mL</td>\n              <td>number per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{#}/min</td>\n              <td>number per minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Ohm.m</td>\n              <td>Ohm meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>osm</td>\n              <td>osmole</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Pan_Bio'U}</td>\n              <td>panbio unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*4{RBCs}</td>\n              <td>per 10 thousand red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/m3</td>\n              <td>per cubic meter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/{entity}</td>\n              <td>per entity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{Hb}</td>\n              <td>per gram of hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{tot_nit}</td>\n              <td>per gram of total nitrogen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{tot_prot}</td>\n              <td>per gram of total protein</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{wet_tis}</td>\n              <td>per gram of wet tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/[IU]</td>\n              <td>per international unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/kg{body_wt}</td>\n              <td>per kilogram of body weight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mm</td>\n              <td>per millimeter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/mmol{creat}</td>\n              <td>per millimole of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/{OIF}</td>\n              <td>per oil immersion field</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*3</td>\n              <td>per thousand</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*3.{RBCs}</td>\n              <td>per thousand red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/10*12{RBCs}</td>\n              <td>per trillion red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{loss_AChR}</td>\n              <td>percent  loss of acetylcholine receptor</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{penetration}</td>\n              <td>percent  penetration</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{abnormal}</td>\n              <td>percent abnormal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{activity}</td>\n              <td>percent activity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{aggregation}</td>\n              <td>percent aggregation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{at_60_min}</td>\n              <td>percent at 60 minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{basal_activity}</td>\n              <td>percent basal activity</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{binding}</td>\n              <td>percent binding</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{blockade}</td>\n              <td>percent blockade</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{blocked}</td>\n              <td>percent blocked</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{bound}</td>\n              <td>percent bound</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{breakdown}</td>\n              <td>percent breakdown</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{deficient}</td>\n              <td>percent deficient</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{dose}</td>\n              <td>percent dose</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{excretion}</td>\n              <td>percent excretion</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Hb}</td>\n              <td>percent hemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{hemolysis}</td>\n              <td>percent hemolysis</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{index}</td>\n              <td>percent index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{inhibition}</td>\n              <td>percent inhibition</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{loss}</td>\n              <td>percent loss</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{lysis}</td>\n              <td>percent lysis</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{normal}</td>\n              <td>percent normal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{normal_pooled_plasma}</td>\n              <td>percent normal pooled plasma</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{bacteria}</td>\n              <td>percent of bacteria</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{baseline}</td>\n              <td>percent of baseline</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{cells}</td>\n              <td>percent of cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{RBCs}</td>\n              <td>percent of red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{WBCs}</td>\n              <td>percent of white blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{positive}</td>\n              <td>percent positive</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{reactive}</td>\n              <td>percent reactive</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{recovery}</td>\n              <td>percent recovery</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{reference}</td>\n              <td>percent reference</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{residual}</td>\n              <td>percent residual</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{saturation}</td>\n              <td>percent saturation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{total}</td>\n              <td>percent total</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{uptake}</td>\n              <td>percent uptake</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{viable}</td>\n              <td>percent viable</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{percentile}</td>\n              <td>percentile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{phenotype}</td>\n              <td>phenotype</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pA</td>\n              <td>picoampere</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/{cell}</td>\n              <td>picogram per cell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/mg{creat}</td>\n              <td>picogram per milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pg/{RBC}</td>\n              <td>picogram per red blood cell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/(24.h)</td>\n              <td>picomole per 24 hour</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pmol/{RBC}</td>\n              <td>picomole per red blood cell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pt_us]</td>\n              <td>pint</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{relative}</td>\n              <td>relative percent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{relative_saturation}</td>\n              <td>relative saturation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Rubella_virus}</td>\n              <td>rubella virus</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{saturation}</td>\n              <td>saturation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>s/{control}</td>\n              <td>second per control</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>S</td>\n              <td>Siemens</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Sv</td>\n              <td>Sievert</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{s_co_ratio}</td>\n              <td>signal to cutoff ratio</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{STDV}</td>\n              <td>standard deviation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>T</td>\n              <td>Tesla</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3{copies}/mL</td>\n              <td>thousand copies per milliliter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*3{RBCs}</td>\n              <td>thousand red blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{TSI_index}</td>\n              <td>thyroid-stimulating immunoglobulin index</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Wb</td>\n              <td>Weber</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{WBCs}</td>\n              <td>white blood cells</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>1*</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>'</td>\n              <td>minute</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>''</td>\n              <td>second</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%[slope]</td>\n              <td>percent of slope</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>%{Bound}</td>\n              <td>PercentBound</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/100{Spermatozoa}</td>\n              <td>Per100Spermatozoa</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>/g{HGB}</td>\n              <td>PerGramHemoglobin</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[acr_br]</td>\n              <td>acre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[acr_us]</td>\n              <td>acre</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Amb'a'1'U]</td>\n              <td>Amb a 1 units</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[bbl_us]</td>\n              <td>barrel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[bf_i]</td>\n              <td>board foot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu]</td>\n              <td>British thermal unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu_39]</td>\n              <td>British thermal unit at 39 °F</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu_59]</td>\n              <td>British thermal unit at 59 °F</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu_60]</td>\n              <td>British thermal unit at 60 °F</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu_IT]</td>\n              <td>international table British thermal unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu_m]</td>\n              <td>mean British thermal unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Btu_th]</td>\n              <td>thermochemical British thermal unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[bu_br]</td>\n              <td>bushel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[bu_us]</td>\n              <td>bushel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[c]</td>\n              <td>velocity of light</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Cal]</td>\n              <td>nutrition label Calories</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[car_Au]</td>\n              <td>carat of gold alloys</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[car_m]</td>\n              <td>metric carat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[CCID_50]</td>\n              <td>CELL CULTURE INFECTIOUS DOSE 50%</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cft_i]</td>\n              <td>cubic foot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ch_br]</td>\n              <td>Gunter's chain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ch_us]</td>\n              <td>Gunter's chain Surveyor's chain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cicero]</td>\n              <td>cicero Didot's pica</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cml_i]</td>\n              <td>circular mil</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cr_i]</td>\n              <td>cord</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[crd_us]</td>\n              <td>cord</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[cyd_i]</td>\n              <td>cubic yard</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[D'ag'U]</td>\n              <td>D-ANTIGEN UNITS</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[didot]</td>\n              <td>didot Didot's point</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[diop]</td>\n              <td>diopter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[dpt_us]</td>\n              <td>dry pint</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[dqt_us]</td>\n              <td>dry quart</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[dr_ap]</td>\n              <td>dram drachm</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[dye'U]</td>\n              <td>Dye unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[e]</td>\n              <td>elementary charge</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[eps_0]</td>\n              <td>permittivity of vacuum</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[fdr_br]</td>\n              <td>fluid dram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[FFU]</td>\n              <td>FOCUS-FORMING UNITS</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ft_br]</td>\n              <td>foot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ft_us]</td>\n              <td>foot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[fth_br]</td>\n              <td>fathom</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[fth_us]</td>\n              <td>fathom</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[fur_us]</td>\n              <td>furlong</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[G]</td>\n              <td>Newtonian constant of gravitation</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[gal_wi]</td>\n              <td>historical winchester gallon</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[gil_br]</td>\n              <td>gill</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[gil_us]</td>\n              <td>gill</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[h]</td>\n              <td>Planck constant</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[hd_i]</td>\n              <td>hand</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[hnsf'U]</td>\n              <td>Hounsfield unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[HP]</td>\n              <td>horsepower</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[hp_C]</td>\n              <td>HOMEOPATHIC POTENCY OF CENTESIMAL SERIES</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[hp_M]</td>\n              <td>HOMEOPATHIC POTENCY OF MILLESIMAL SERIES</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[hp_Q]</td>\n              <td>HOMEOPATHIC POTENCY OF QUINTAMILLESIMAL SERIES</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[hp_X]</td>\n              <td>HOMEOPATHIC POTENCY OF DECIMAL SERIES</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[in_br]</td>\n              <td>inch</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[in_i'Hg]</td>\n              <td>inch of mercury column</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[in_us]</td>\n              <td>inch</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]/dL</td>\n              <td>InternationalUnitsPerDeciLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]/g</td>\n              <td>InternationalUnitsPerGram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]/kg</td>\n              <td>InternationalUnitsPerKilogram</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]/L</td>\n              <td>InternationalUnitsPerLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[iU]/mL</td>\n              <td>InternationalUnitsPerMilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[k]</td>\n              <td>Boltzmann constant</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[kn_br]</td>\n              <td>knot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[kn_i]</td>\n              <td>knot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[knk'U]</td>\n              <td>Kunkel unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lb_ap]</td>\n              <td>pound</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lb_tr]</td>\n              <td>pound</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lbf_av]</td>\n              <td>pound force</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lcwt_av]</td>\n              <td>long hunderdweight British hundredweight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[Lf]</td>\n              <td>LIMIT OF FLOCCULATION</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ligne]</td>\n              <td>ligne French line</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lk_br]</td>\n              <td>link for Gunter's chain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lk_us]</td>\n              <td>link for Gunter's chain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lne]</td>\n              <td>line</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[lton_av]</td>\n              <td>long ton British ton</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[ly]</td>\n              <td>light-year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[m_e]</td>\n              <td>electron mass</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[m_p]</td>\n              <td>proton mass</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mesh_i]</td>\n              <td>mesh</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[MET]</td>\n              <td>metabolic equivalent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mi_br]</td>\n              <td>mile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mil_i]</td>\n              <td>mil</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mil_us]</td>\n              <td>mil</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[min_br]</td>\n              <td>minim</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[mu_0]</td>\n              <td>permeability of vacuum</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[nmi_br]</td>\n              <td>nautical mile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[oz_ap]</td>\n              <td>ounce (US and British)</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pc_br]</td>\n              <td>pace</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pca]</td>\n              <td>pica</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pca_pr]</td>\n              <td>Printer's pica</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[p'diop]</td>\n              <td>prism diopter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[PFU]</td>\n              <td>PLAQUE-FORMING UNITS</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pi]</td>\n              <td>the number pi</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pied]</td>\n              <td>pied French foot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pk_br]</td>\n              <td>peck</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pk_us]</td>\n              <td>peck</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pnt]</td>\n              <td>point</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pnt_pr]</td>\n              <td>Printer's point</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[PNU]</td>\n              <td>PROTEIN NITROGEN UNITS</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pouce]</td>\n              <td>pouce French inch</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[PRU]</td>\n              <td>peripheral vascular resistance unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[pwt_tr]</td>\n              <td>pennyweight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[rch_us]</td>\n              <td>Ramden's chain Engineer's chain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[rd_br]</td>\n              <td>rod</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[rd_us]</td>\n              <td>rod</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[rlk_us]</td>\n              <td>link for Ramden's chain</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[S]</td>\n              <td>Svedberg unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[sc_ap]</td>\n              <td>scruple</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[sct]</td>\n              <td>section</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[scwt_av]</td>\n              <td>short hundredweight U.S. hundredweight</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[smgy'U]</td>\n              <td>Somogyi unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[smi_us]</td>\n              <td>square mile</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[smoot]</td>\n              <td>Smoot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[srd_us]</td>\n              <td>square rod</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[stone_av]</td>\n              <td>stone British stone</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[TCID_50]</td>\n              <td>TISSUE CULTURE INFECTIOUS DOSE 50%</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[twp]</td>\n              <td>township</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[USP'U]</td>\n              <td>UNITED STATES PHARMACOPEIA UNIT</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[yd_br]</td>\n              <td>yard</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>[yd_us]</td>\n              <td>yard</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Cells}/uL</td>\n              <td>CellsPerMicroLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Copies}/mL</td>\n              <td>CopiesPerMilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ct}</td>\n              <td>crossing threshold</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Ehrlich_U}/dL</td>\n              <td>EhrlichUnitsPerDeciLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{EhrlichU}/dL</td>\n              <td>EhrlichUnitsPerDeciLiter [Arbitrary Concentration Units]</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Elisa_U}/mL</td>\n              <td>ElisaUnitsPerMilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{ElisaU}/mL</td>\n              <td>ElisaUnitsPerMilliLiter [Arbitrary Concentration Units]</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{kp_C}</td>\n              <td>HOMEOPATHIC POTENCY OF CENTESIMAL KORSAKOVIAN SERIES</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{rbc}</td>\n              <td>red blood cell count</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{Spermatozoa}/mL</td>\n              <td>SpermatozoaPerMilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{tbl}</td>\n              <td>tablets</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>{tot}</td>\n              <td>particles total count</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10*</td>\n              <td>the number ten for arbitrary powers</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>10^</td>\n              <td>the number ten for arbitrary powers</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>a_g</td>\n              <td>mean Gregorian year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>a_j</td>\n              <td>mean Julian year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>a_t</td>\n              <td>tropical year</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Ao</td>\n              <td>Ångström</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ar</td>\n              <td>are</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>AU</td>\n              <td>astronomic unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>b</td>\n              <td>barn</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B</td>\n              <td>bel</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B[kW]</td>\n              <td>bel kilowatt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B[mV]</td>\n              <td>bel millivolt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B[SPL]</td>\n              <td>bel sound pressure</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B[uV]</td>\n              <td>bel microvolt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B[V]</td>\n              <td>bel volt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>B[W]</td>\n              <td>bel watt</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Bd</td>\n              <td>baud</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Bi</td>\n              <td>Biot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>bit</td>\n              <td>bit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>bit_s</td>\n              <td>bit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>By</td>\n              <td>byte</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>C</td>\n              <td>Coulomb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cal_[15]</td>\n              <td>calorie at 15 °C</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cal_[20]</td>\n              <td>calorie at 20 °C</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cal_IT</td>\n              <td>international table calorie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cal_m</td>\n              <td>mean calorie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cal_th</td>\n              <td>thermochemical calorie</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>cd</td>\n              <td>candela</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Ci</td>\n              <td>CURIE</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>circ</td>\n              <td>circle</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>dyn</td>\n              <td>dyne</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>G</td>\n              <td>Gauss</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g%</td>\n              <td>gram percent</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>g.m/{H.B.}</td>\n              <td>gram meter per heartbeat</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Gal</td>\n              <td>Gal</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Gb</td>\n              <td>Gilbert</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>gf</td>\n              <td>gram-force</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>gon</td>\n              <td>gon grade</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>k[iU]/mL</td>\n              <td>KiloInternationalUnitsPerMilliLiter</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>kg{wet'tis}</td>\n              <td>kilogram of wet tissue</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Ky</td>\n              <td>Kayser</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Lmb</td>\n              <td>Lambert</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>lx</td>\n              <td>lux</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m[H2O]</td>\n              <td>meter of water column</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>m[Hg]</td>\n              <td>meter of mercury column</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/{TotalVolume}</td>\n              <td>MilliGramPerTotalVolume</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg/mg{Cre}</td>\n              <td>MilligramsPerMilligramCreatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mg{creat}</td>\n              <td>milligram of creatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mho</td>\n              <td>mho</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/{TotalVolume}</td>\n              <td>MilliMolesPerTotalVolume [Substance Units]</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mmol/mol{Cre}</td>\n              <td>MilliMolesPerMoleCreatinine</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mo_g</td>\n              <td>mean Gregorian month</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mo_j</td>\n              <td>mean Julian month</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>mo_s</td>\n              <td>synodal month</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Mx</td>\n              <td>Maxwell</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Np</td>\n              <td>neper</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>Oe</td>\n              <td>Oersted</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>P</td>\n              <td>Poise</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>pc</td>\n              <td>parsec</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>ph</td>\n              <td>phot</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>R</td>\n              <td>Roentgen</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>rad</td>\n              <td>radian</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>RAD</td>\n              <td>radiation absorbed dose</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>REM</td>\n              <td>radiation equivalent man</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>sb</td>\n              <td>stilb</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>sph</td>\n              <td>spere</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>sr</td>\n              <td>steradian</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>st</td>\n              <td>stere</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>u</td>\n              <td>unified atomic mass unit</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>uCi</td>\n              <td>MICROCURIE</td>\n              <td/>\n            </tr>\n            <tr>\n              <td>W</td>\n              <td>Watt</td>\n              <td/>\n            </tr>\n          </table>\n        </li>\n      </ul>\n    </div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/valueset-extensible",
        "valueBoolean": true
      }
    ],
    "url": "http://hl7.org/fhir/ValueSet/ucum-common",
    "version": "4.0.1",
    "name": "Common UCUM units",
    "status": "draft",
    "publisher": "FHIR Project",
    "description": "Commonly encountered UCUM units (for purposes of helping populate look ups.",
    "copyright": "UCUM is Copyright © 1999-2013 Regenstrief Institute, Inc. and The UCUM Organization, Indianapolis, IN. All rights reserved. See http://unitsofmeasure.org/trac//wiki/TermsOfUse for details.",
    "compose": {
      "include": [
        {
          "system": "http://unitsofmeasure.org",
          "concept": [
            {
              "code": "%",
              "display": "percent"
            },
            {
              "code": "%/100{WBC}",
              "display": "percent / 100 WBC"
            },
            {
              "code": "%{0to3Hours}",
              "display": "percent 0to3Hours"
            },
            {
              "code": "%{Abnormal}",
              "display": "percent Abnormal"
            },
            {
              "code": "%{Activity}",
              "display": "percent Activity"
            },
            {
              "code": "%{BasalActivity}",
              "display": "percent BasalActivity"
            },
            {
              "code": "%{Binding}",
              "display": "percent Binding"
            },
            {
              "code": "%{Blockade}",
              "display": "percent Blockade"
            },
            {
              "code": "%{Carboxyhemoglobin}",
              "display": "percent Carboxyhemoglobin"
            },
            {
              "code": "%{Conversion}",
              "display": "percent Conversion"
            },
            {
              "code": "%{Cound}",
              "display": "percent Cound"
            },
            {
              "code": "%{EosSeen}",
              "display": "percent EosSeen"
            },
            {
              "code": "%{Excretion}",
              "display": "percent Excretion"
            },
            {
              "code": "%{Fat}",
              "display": "percent Fat"
            },
            {
              "code": "%{FetalErythrocytes}",
              "display": "percent FetalErythrocytes"
            },
            {
              "code": "%{Hemoglobin}",
              "display": "percent Hemoglobin"
            },
            {
              "code": "%{HemoglobinA1C}",
              "display": "percent HemoglobinA1C"
            },
            {
              "code": "%{HemoglobinSaturation}",
              "display": "percent HemoglobinSaturation"
            },
            {
              "code": "%{Hemolysis}",
              "display": "percent Hemolysis"
            },
            {
              "code": "%{HumanResponse}",
              "display": "percent HumanResponse"
            },
            {
              "code": "%{Index}",
              "display": "percent Index"
            },
            {
              "code": "%{Inhibition}",
              "display": "percent Inhibition"
            },
            {
              "code": "%{Live}",
              "display": "percent Live"
            },
            {
              "code": "%{Negative Control}",
              "display": "percent Negative Control"
            },
            {
              "code": "%{Normal}",
              "display": "percent Normal"
            },
            {
              "code": "%{NormalControl}",
              "display": "percent NormalControl"
            },
            {
              "code": "%{NormalPooledPlasma}",
              "display": "percent NormalPooledPlasma"
            },
            {
              "code": "%{ofAvailable}",
              "display": "percent ofAvailable"
            },
            {
              "code": "%{ofBacteria}",
              "display": "percent ofBacteria"
            },
            {
              "code": "%{OfLymphocytes}",
              "display": "percent OfLymphocytes"
            },
            {
              "code": "%{OfWBCs}",
              "display": "percent OfWBCs"
            },
            {
              "code": "%{Oxygen}",
              "display": "percent Oxygen"
            },
            {
              "code": "%{Positive}",
              "display": "percent Positive"
            },
            {
              "code": "%{Precipitate}",
              "display": "percent Precipitate"
            },
            {
              "code": "%{Reactivity}",
              "display": "percent Reactivity"
            },
            {
              "code": "%{response}",
              "display": "percent response"
            },
            {
              "code": "%{risk}",
              "display": "percent risk"
            },
            {
              "code": "%{SpermMotility}",
              "display": "percent SpermMotility"
            },
            {
              "code": "%{Total}",
              "display": "percent Total"
            },
            {
              "code": "%{TotalProtein}",
              "display": "percent TotalProtein"
            },
            {
              "code": "%{Tot'Cholesterol}",
              "display": "percent Tot'Cholesterol"
            },
            {
              "code": "%{Tot'Hgb}",
              "display": "percent Tot'Hgb"
            },
            {
              "code": "%{Uptake}",
              "display": "percent Uptake"
            },
            {
              "code": "%{vol}",
              "display": "VolumePercent"
            },
            {
              "code": "%{WeightToWeight}",
              "display": "percent WeightToWeight"
            },
            {
              "code": "/(12.h)",
              "display": "per 12 * hour"
            },
            {
              "code": "/[arb'U]",
              "display": "per arbitrary unit"
            },
            {
              "code": "/[HPF]",
              "display": "per high power field"
            },
            {
              "code": "/[iU]",
              "display": "per international unit"
            },
            {
              "code": "/[LPF]",
              "display": "per low power field"
            },
            {
              "code": "/{Entity}",
              "display": "per Entity"
            },
            {
              "code": "/[HPF]",
              "display": "per hpf"
            },
            {
              "code": "/[LPF]",
              "display": "per LPF"
            },
            {
              "code": "/{oif}",
              "display": "per oif"
            },
            {
              "code": "/{Specimen}",
              "display": "per Specimen"
            },
            {
              "code": "/{tot}",
              "display": "per tot"
            },
            {
              "code": "/10*10",
              "display": "PerTenGiga"
            },
            {
              "code": "/10*12",
              "display": "PerTrillion"
            },
            {
              "code": "/10*12{rbc}",
              "display": "PerTrillionRedBloodCells"
            },
            {
              "code": "/10*6",
              "display": "PerMillion"
            },
            {
              "code": "/10*9",
              "display": "PerBillion"
            },
            {
              "code": "/100",
              "display": "per 100"
            },
            {
              "code": "/100{cells}",
              "display": "per 100 cells"
            },
            {
              "code": "/100{neutrophils}",
              "display": "per 100 neutrophils"
            },
            {
              "code": "/100{spermatozoa}",
              "display": "per 100 spermatozoa"
            },
            {
              "code": "/100{WBC}",
              "display": "Per100WBC"
            },
            {
              "code": "/100{WBCs}",
              "display": "Per100WBC"
            },
            {
              "code": "/a",
              "display": "/ year"
            },
            {
              "code": "/cm[H2O]",
              "display": "per centimeter of water"
            },
            {
              "code": "/d",
              "display": "per day"
            },
            {
              "code": "/dL",
              "display": "per deciliter"
            },
            {
              "code": "/g",
              "display": "per gram"
            },
            {
              "code": "/g{creat}",
              "display": "per gram creat"
            },
            {
              "code": "/g{hgb}",
              "display": "per gram hgb"
            },
            {
              "code": "/g{tot'nit}",
              "display": "per gram tot'nit"
            },
            {
              "code": "/g{tot'prot}",
              "display": "per gram tot'prot"
            },
            {
              "code": "/g{wet'tis}",
              "display": "per gram wet'tis"
            },
            {
              "code": "/h",
              "display": "per hour"
            },
            {
              "code": "/kg",
              "display": "per kilogram"
            },
            {
              "code": "/kg{body'wt}",
              "display": "per kilogram body wt"
            },
            {
              "code": "/L",
              "display": "per liter"
            },
            {
              "code": "/m2",
              "display": "per square meter"
            },
            {
              "code": "/mg",
              "display": "per milligram"
            },
            {
              "code": "/min",
              "display": "per minute"
            },
            {
              "code": "/mL",
              "display": "per milliliter"
            },
            {
              "code": "/mm3",
              "display": "per cubic millimeter"
            },
            {
              "code": "/mmol",
              "display": "per millimole"
            },
            {
              "code": "/mo",
              "display": "per month"
            },
            {
              "code": "/s",
              "display": "per second"
            },
            {
              "code": "/U",
              "display": "per enzyme unit"
            },
            {
              "code": "/ug",
              "display": "per microgram"
            },
            {
              "code": "/uL",
              "display": "per microliter"
            },
            {
              "code": "/wk",
              "display": "per week"
            },
            {
              "code": "[APL'U]",
              "display": "IgA anticardiolipin unit"
            },
            {
              "code": "[APL'U]/mL",
              "display": "IgA anticardiolipin unit per milliliter"
            },
            {
              "code": "[arb'U]",
              "display": "arbitrary unit"
            },
            {
              "code": "[arb'U]/L",
              "display": "arbitary unit / liter"
            },
            {
              "code": "[arb'U]/mL",
              "display": "arbitrary unit per milliliter"
            },
            {
              "code": "[AU]",
              "display": "allergy unit"
            },
            {
              "code": "[BAU]",
              "display": "bioequivalent allergen unit"
            },
            {
              "code": "[beth'U]",
              "display": "Bethesda unit"
            },
            {
              "code": "[beth'U]",
              "display": "Bethesda unit"
            },
            {
              "code": "[CFU]",
              "display": "colony forming unit"
            },
            {
              "code": "[CFU]/L",
              "display": "colony forming unit per liter"
            },
            {
              "code": "[CFU]/mL",
              "display": "colony forming unit per milliliter"
            },
            {
              "code": "[Ch]",
              "display": "French (catheter gauge)"
            },
            {
              "code": "[cin_i]",
              "display": "cubic inch"
            },
            {
              "code": "[cup_us]",
              "display": "cup"
            },
            {
              "code": "[degF]",
              "display": "degree Fahrenheit"
            },
            {
              "code": "[dr_av]",
              "display": "Dram (US and British)"
            },
            {
              "code": "[drp]",
              "display": "drop"
            },
            {
              "code": "[drp]/[HPF]",
              "display": "drop / HPF"
            },
            {
              "code": "[drp]/h",
              "display": "drop / hour"
            },
            {
              "code": "[drp]/min",
              "display": "drop / minute"
            },
            {
              "code": "[drp]/mL",
              "display": "drop / milliliter"
            },
            {
              "code": "[drp]/s",
              "display": "drop / second"
            },
            {
              "code": "[fdr_us]",
              "display": "fluid dram"
            },
            {
              "code": "[foz_br]",
              "display": "fluid ounce"
            },
            {
              "code": "[foz_us]",
              "display": "fluid ounce"
            },
            {
              "code": "[ft_i]",
              "display": "Feet"
            },
            {
              "code": "[fth_i]",
              "display": "fathom"
            },
            {
              "code": "[gal_br]",
              "display": "gallon"
            },
            {
              "code": "[gal_us]",
              "display": "Queen Anne's wine gallon"
            },
            {
              "code": "[GPL'U]",
              "display": "IgG anticardiolipin unit"
            },
            {
              "code": "[gr]",
              "display": "grain"
            },
            {
              "code": "[in_i]",
              "display": "inch (international)"
            },
            {
              "code": "[iU]",
              "display": "international unit"
            },
            {
              "code": "[IU]/(2.h)",
              "display": "international unit per 2 hour"
            },
            {
              "code": "[IU]/(24.h)",
              "display": "international unit per 24 hour"
            },
            {
              "code": "[IU]/10*9{RBCs}",
              "display": "international unit per billion red blood cells"
            },
            {
              "code": "[IU]/d",
              "display": "international unit per day"
            },
            {
              "code": "[IU]/dL",
              "display": "international unit per deciliter"
            },
            {
              "code": "[IU]/g",
              "display": "international unit per gram"
            },
            {
              "code": "[IU]/g{Hb}",
              "display": "international unit per gram of hemoglobin"
            },
            {
              "code": "[iU]/g{Hgb}",
              "display": "international unit / gram Hgb"
            },
            {
              "code": "[IU]/h",
              "display": "international unit per hour"
            },
            {
              "code": "[IU]/kg",
              "display": "international unit per kilogram"
            },
            {
              "code": "[IU]/kg/d",
              "display": "international unit per kilogram per day"
            },
            {
              "code": "[IU]/L",
              "display": "international unit per liter"
            },
            {
              "code": "[IU]/min",
              "display": "international unit per minute"
            },
            {
              "code": "[IU]/mL",
              "display": "international unit per milliliter"
            },
            {
              "code": "[lb_av]",
              "display": "pound (US and British)"
            },
            {
              "code": "[mi_i]",
              "display": "statute mile"
            },
            {
              "code": "[mi_us]",
              "display": "mile"
            },
            {
              "code": "[min_us]",
              "display": "minim"
            },
            {
              "code": "[MPL'U]",
              "display": "IgM anticardiolipin unit"
            },
            {
              "code": "[nmi_i]",
              "display": "nautical mile"
            },
            {
              "code": "[oz_av]",
              "display": "ounce (US and British)"
            },
            {
              "code": "[oz_tr]",
              "display": "ounce"
            },
            {
              "code": "[pH]",
              "display": "pH"
            },
            {
              "code": "[pi].rad/min",
              "display": "the number pi * radian / minute"
            },
            {
              "code": "[ppb]",
              "display": "part per billion"
            },
            {
              "code": "[ppm]",
              "display": "part per million"
            },
            {
              "code": "[ppm]{v/v}",
              "display": "part per million in volume per volume"
            },
            {
              "code": "[pptr]",
              "display": "part per trillion"
            },
            {
              "code": "[ppth]",
              "display": "parts per thousand"
            },
            {
              "code": "[pptr]",
              "display": "parts per trillion"
            },
            {
              "code": "[psi]",
              "display": "pound per square inch"
            },
            {
              "code": "[pt_br]",
              "display": "pint"
            },
            {
              "code": "[qt_br]",
              "display": "quart"
            },
            {
              "code": "[qt_us]",
              "display": "quart"
            },
            {
              "code": "[sft_i]",
              "display": "square foot (international)"
            },
            {
              "code": "[sin_i]",
              "display": "square inch (international)"
            },
            {
              "code": "[ston_av]",
              "display": "short ton U.S. ton"
            },
            {
              "code": "[syd_i]",
              "display": "square yard"
            },
            {
              "code": "[tbs_us]",
              "display": "tablespoon (US)"
            },
            {
              "code": "[tb'U]",
              "display": "tuberculin unit"
            },
            {
              "code": "[todd'U]",
              "display": "Todd unit"
            },
            {
              "code": "[todd'U]",
              "display": "Todd unit"
            },
            {
              "code": "[tsp_us]",
              "display": "teaspoon"
            },
            {
              "code": "[yd_i]",
              "display": "yard"
            },
            {
              "code": "{# of calculi}",
              "display": "# of calculi"
            },
            {
              "code": "{# of donor informative markers}",
              "display": "# of donor informative markers"
            },
            {
              "code": "{# of fetuses}",
              "display": "# of fetuses"
            },
            {
              "code": "{# of informative markers}",
              "display": "# of informative markers"
            },
            {
              "code": "{#}",
              "display": "#"
            },
            {
              "code": "{2 or 3 times}/d",
              "display": "2 or 3 times / day"
            },
            {
              "code": "{3 times}/d",
              "display": "3 times / day"
            },
            {
              "code": "{4 times}/d",
              "display": "4 times / day"
            },
            {
              "code": "{5 times}/d",
              "display": "5 times / day"
            },
            {
              "code": "{absorbance}",
              "display": "absorbance"
            },
            {
              "code": "{Absorbance'U}",
              "display": "Absorbance'U"
            },
            {
              "code": "{Absorbance'U}/mL",
              "display": "Absorbance'U / milliliter"
            },
            {
              "code": "{activity}",
              "display": "activity"
            },
            {
              "code": "{ActivityCoefficient}",
              "display": "ActivityCoefficient"
            },
            {
              "code": "{AHF'U}",
              "display": "AHF'U"
            },
            {
              "code": "{AntibodyResponse'U}",
              "display": "AntibodyResponse'U"
            },
            {
              "code": "{Applicator}",
              "display": "Applicator"
            },
            {
              "code": "{APS'U}",
              "display": "IgA antiphosphatidylserine unit"
            },
            {
              "code": "{AspirinReaction'U}",
              "display": "AspirinReaction'U"
            },
            {
              "code": "{Bead}",
              "display": "Bead"
            },
            {
              "code": "{Beats}/min",
              "display": "Beats / minute"
            },
            {
              "code": "{Bottle}",
              "display": "Bottle"
            },
            {
              "code": "{Bowls}/d",
              "display": "Bowls / day"
            },
            {
              "code": "{Breaths}/min",
              "display": "Breaths / minute"
            },
            {
              "code": "{CAE'U}",
              "display": "complement activity enzyme unit"
            },
            {
              "code": "{CagRepeat}",
              "display": "CagRepeat"
            },
            {
              "code": "{Can}",
              "display": "Can"
            },
            {
              "code": "{Cans}/wk",
              "display": "Cans / week"
            },
            {
              "code": "{Capsule}",
              "display": "Capsule"
            },
            {
              "code": "{Cell}",
              "display": "Cell"
            },
            {
              "code": "{cells}",
              "display": "cells"
            },
            {
              "code": "{cells}/[HPF]",
              "display": "cells per high power field"
            },
            {
              "code": "{Cells}/mL",
              "display": "Cells / milliliter"
            },
            {
              "code": "{cells}/uL",
              "display": "cells per microliter"
            },
            {
              "code": "{CfTiter}",
              "display": "CfTiter"
            },
            {
              "code": "{cfu}",
              "display": "cfu"
            },
            {
              "code": "{cfu}/mL",
              "display": "cfu / milliliter"
            },
            {
              "code": "{CGG_repeats}",
              "display": "CGG_repeats"
            },
            {
              "code": "{CGG}",
              "display": "CGG"
            },
            {
              "code": "{CH100'U}",
              "display": "complement CH100 unit"
            },
            {
              "code": "{clock time}",
              "display": "clock time"
            },
            {
              "code": "{clock_time}",
              "display": "clock_time"
            },
            {
              "code": "{ComplementActivityEnzyme'U}",
              "display": "ComplementActivityEnzyme'U"
            },
            {
              "code": "{ComplementCH100'U}",
              "display": "ComplementCH100'U"
            },
            {
              "code": "{ComplementCH50'U}",
              "display": "ComplementCH50'U"
            },
            {
              "code": "{copies}/mL",
              "display": "copies per milliliter"
            },
            {
              "code": "{copies}/ug",
              "display": "copies per microgram"
            },
            {
              "code": "{Copies}/uL",
              "display": "Copies / microliter"
            },
            {
              "code": "{Count}",
              "display": "Count"
            },
            {
              "code": "{Counts}/min",
              "display": "Counts / minute"
            },
            {
              "code": "{Dalton}",
              "display": "Dalton"
            },
            {
              "code": "{DdTiter}",
              "display": "DdTiter"
            },
            {
              "code": "{DeltaOpticalDensity}",
              "display": "DeltaOpticalDensity"
            },
            {
              "code": "{Dilution}",
              "display": "dilution"
            },
            {
              "code": "{Disintegrations}/min",
              "display": "Disintegrations / minute"
            },
            {
              "code": "{Dose}",
              "display": "Dose"
            },
            {
              "code": "{Drinks}/d",
              "display": "Drinks / day"
            },
            {
              "code": "{Each}",
              "display": "Each"
            },
            {
              "code": "{Ehrlich'U}",
              "display": "Ehrlich unit"
            },
            {
              "code": "{Ehrlich'U}/(2.h)",
              "display": "Ehrlich unit per 2 hour"
            },
            {
              "code": "{Ehrlich'U}/100.g",
              "display": "Ehrlich unit per 100 gram"
            },
            {
              "code": "{Ehrlich'U}/d",
              "display": "Ehrlich unit per day"
            },
            {
              "code": "{Ehrlich'U}/dL",
              "display": "Ehrilich unit per deciliter"
            },
            {
              "code": "{Ehrlich'U}/mL",
              "display": "Ehrlich'U / milliliter"
            },
            {
              "code": "{EIAIndex}",
              "display": "EIA index"
            },
            {
              "code": "{EIATiter}",
              "display": "EIA titer"
            },
            {
              "code": "{EIA'U}",
              "display": "EIA unit"
            },
            {
              "code": "{EIA'U}/U",
              "display": "EIA unit per enzyme Unit"
            },
            {
              "code": "{ElisaIndex}",
              "display": "ElisaIndex"
            },
            {
              "code": "{ELISA'U}",
              "display": "ELISA unit"
            },
            {
              "code": "{Elisa'U}/mL",
              "display": "Elisa'U / milliliter"
            },
            {
              "code": "{ElisaValue}",
              "display": "ElisaValue"
            },
            {
              "code": "{ERY}/uL",
              "display": "erythrocyte per microliter"
            },
            {
              "code": "{Events}",
              "display": "Events"
            },
            {
              "code": "{FluorescenceIntensity'U}",
              "display": "FluorescenceIntensity'U"
            },
            {
              "code": "U{G}",
              "display": "G unit"
            },
            {
              "code": "{GliadinIndexValue}",
              "display": "GliadinIndexValue"
            },
            {
              "code": "{G-PortionPhospholipids}",
              "display": "G-PortionPhospholipids"
            },
            {
              "code": "{HaTiter}",
              "display": "HaTiter"
            },
            {
              "code": "{IfaIndex}",
              "display": "IfaIndex"
            },
            {
              "code": "{IfaTiter}",
              "display": "IfaTiter"
            },
            {
              "code": "{IgAAntiphosphatidyleserine'U}",
              "display": "IgAAntiphosphatidyleserine'U"
            },
            {
              "code": "{IgAPhospholipid'U}",
              "display": "IgAPhospholipid'U"
            },
            {
              "code": "{IgGAntiphosphatidyleserine'U}",
              "display": "IgGAntiphosphatidyleserine'U"
            },
            {
              "code": "{IgGIndex}",
              "display": "IgGIndex"
            },
            {
              "code": "{IgMAntiphosphatidyleserine'U}",
              "display": "IgMAntiphosphatidyleserine'U"
            },
            {
              "code": "{IgMIndex}",
              "display": "IgMIndex"
            },
            {
              "code": "{ImmuneComplex'U}",
              "display": "immune complex unit"
            },
            {
              "code": "{ImmuneStatusRatio}",
              "display": "ImmuneStatusRatio"
            },
            {
              "code": "{Immunity}",
              "display": "Immunity"
            },
            {
              "code": "{Index_val}",
              "display": "Index_val"
            },
            {
              "code": "{index}",
              "display": "index"
            },
            {
              "code": "{IndexValue}",
              "display": "IndexValue"
            },
            {
              "code": "{InhaledTobaccoUseAmountYears}",
              "display": "InhaledTobaccoUseAmountYears"
            },
            {
              "code": "{InhaledTobaccoUsePacks}/d",
              "display": "InhaledTobaccoUsePacks / day"
            },
            {
              "code": "{INR}",
              "display": "international normalized ratio"
            },
            {
              "code": "{INR'unit}",
              "display": "INR'unit"
            },
            {
              "code": "{JDF'U}",
              "display": "Juvenile Diabetes Foundation unit"
            },
            {
              "code": "{JDF'U}/L",
              "display": "Juvenile Diabetes Foundation unit per liter"
            },
            {
              "code": "{JuvenileDiabetesFound'U}",
              "display": "JuvenileDiabetesFound'U"
            },
            {
              "code": "{KCT'U}",
              "display": "kaolin clotting time"
            },
            {
              "code": "{KRONU'U}/L",
              "display": "Kronus unit per liter"
            },
            {
              "code": "{KRONU'U}/mL",
              "display": "Kronus unit per milliliter"
            },
            {
              "code": "{lgCopies}/ml",
              "display": "lgCopies / milliliter"
            },
            {
              "code": "{log_copies}/mL",
              "display": "log (base 10) copies per milliliter"
            },
            {
              "code": "{log_IU}/mL",
              "display": "log (base 10) international unit per milliliter"
            },
            {
              "code": "{LymeIndexValue}",
              "display": "LymeIndexValue"
            },
            {
              "code": "{M.o.M.}",
              "display": "M.o.M."
            },
            {
              "code": "{M.o.M}",
              "display": "multiple of the median"
            },
            {
              "code": "{Markers}",
              "display": "Markers"
            },
            {
              "code": "{minidrp}",
              "display": "minidrp"
            },
            {
              "code": "{Molecule}/{Platelet}",
              "display": "Molecule / Platelet"
            },
            {
              "code": "{M-PortionPhospholipids}",
              "display": "M-PortionPhospholipids"
            },
            {
              "code": "{MPS'U}",
              "display": "IgM antiphosphatidylserine unit"
            },
            {
              "code": "{MPS'U}/mL",
              "display": "IgM antiphosphatidylserine unit per milliliter"
            },
            {
              "code": "{MultOfMean}",
              "display": "MultOfMean"
            },
            {
              "code": "{NonspecificOunce}",
              "display": "NonspecificOunce"
            },
            {
              "code": "{Number}",
              "display": "Number"
            },
            {
              "code": "{OD_unit}",
              "display": "optical density unit"
            },
            {
              "code": "{Once}/d",
              "display": "Once / day"
            },
            {
              "code": "{OpticalDensity}",
              "display": "OpticalDensity"
            },
            {
              "code": "{OpticalDensityIndex}",
              "display": "OpticalDensityIndex"
            },
            {
              "code": "{OpticalDensityRatio}",
              "display": "OpticalDensityRatio"
            },
            {
              "code": "{P2Y12 Reaction Units}",
              "display": "P2Y12 Reaction Units"
            },
            {
              "code": "{Package}",
              "display": "Package"
            },
            {
              "code": "{Packs}/d",
              "display": "Packs / day"
            },
            {
              "code": "{PackYears}",
              "display": "PackYears"
            },
            {
              "code": "{Patch}",
              "display": "Patch"
            },
            {
              "code": "{Percentile}",
              "display": "Percentile"
            },
            {
              "code": "{Pill}",
              "display": "Pill"
            },
            {
              "code": "{Pouches}/wk",
              "display": "Pouches / week"
            },
            {
              "code": "{RadioactiveT3UptakeRatio}",
              "display": "RadioactiveT3UptakeRatio"
            },
            {
              "code": "{ratio}",
              "display": "ratio"
            },
            {
              "code": "{RBC}/uL",
              "display": "red blood cell per microliter"
            },
            {
              "code": "{RecTiter}",
              "display": "RecTiter"
            },
            {
              "code": "{Relative'U}",
              "display": "Relative'U"
            },
            {
              "code": "{RelativeViscosity}",
              "display": "RelativeViscosity"
            },
            {
              "code": "{RPI'U}",
              "display": "RPI'U"
            },
            {
              "code": "{RubellaVirus}",
              "display": "RubellaVirus"
            },
            {
              "code": "{SatIndex}",
              "display": "SatIndex"
            },
            {
              "code": "{Scoop}",
              "display": "Scoop"
            },
            {
              "code": "{ScoreOf}",
              "display": "ScoreOf"
            },
            {
              "code": "{shift}",
              "display": "shift"
            },
            {
              "code": "{spermatozoa}/mL",
              "display": "spermatozoa per milliliter"
            },
            {
              "code": "{spray}",
              "display": "spray"
            },
            {
              "code": "{StandardDeviation}",
              "display": "StandardDeviation"
            },
            {
              "code": "{StandardIgA'U}",
              "display": "StandardIgA'U"
            },
            {
              "code": "{StandardIgG'U}",
              "display": "StandardIgG'U"
            },
            {
              "code": "{StandardIgM'U}",
              "display": "StandardIgM'U"
            },
            {
              "code": "{StdDeviation'U}",
              "display": "StdDeviation'U"
            },
            {
              "code": "{StimulatingIndex}",
              "display": "StimulatingIndex"
            },
            {
              "code": "{Streptozyme'U}",
              "display": "Streptozyme'U"
            },
            {
              "code": "{ThyroxinUptake'U}",
              "display": "ThyroxinUptake'U"
            },
            {
              "code": "{TIBC'U}",
              "display": "TIBC'U"
            },
            {
              "code": "{Times}/wk",
              "display": "Times / week"
            },
            {
              "code": "{Tine'U}",
              "display": "Tine'U"
            },
            {
              "code": "{titer}",
              "display": "titer"
            },
            {
              "code": "{ToxoplasmaIndexValue}",
              "display": "ToxoplasmaIndexValue"
            },
            {
              "code": "{Vial}",
              "display": "Vial"
            },
            {
              "code": "{Volume}/{Vvolume}",
              "display": "Volume / Vvolume"
            },
            {
              "code": "{WeeksDays}",
              "display": "WeeksDays"
            },
            {
              "code": "{WhiteBloodCell}",
              "display": "WhiteBloodCell"
            },
            {
              "code": "1/d",
              "display": "one per day"
            },
            {
              "code": "1/min",
              "display": "one per minute"
            },
            {
              "code": "10*12/L",
              "display": "trillion per liter"
            },
            {
              "code": "10*3",
              "display": "Thousand"
            },
            {
              "code": "10*3.{RBC}",
              "display": "Thousand Red Blood Cells"
            },
            {
              "code": "10*3.U",
              "display": "Thousand Per * Unit"
            },
            {
              "code": "10*3/L",
              "display": "Thousand Per Liter"
            },
            {
              "code": "10*3/mL",
              "display": "Thousand Per MilliLiter"
            },
            {
              "code": "10*3/uL",
              "display": "Thousands Per MicroLiter"
            },
            {
              "code": "10*3{Copies}/mL",
              "display": "Thousand Copies Per MilliLiter"
            },
            {
              "code": "10*-3{Polarization'U}",
              "display": "(the number ten for arbitrary powers ^ -3) Polarization'U"
            },
            {
              "code": "10*5",
              "display": "OneHundredThousand"
            },
            {
              "code": "10*6",
              "display": "Million"
            },
            {
              "code": "10*6.[iU]",
              "display": "MillionInternationalUnit"
            },
            {
              "code": "10*6.eq/mL",
              "display": "MillionEquivalentsPerMilliLiter"
            },
            {
              "code": "10*6.U",
              "display": "(the number ten for arbitrary powers ^ 6) * Unit"
            },
            {
              "code": "10*6/{Specimen}",
              "display": "MillionPerSpecimen"
            },
            {
              "code": "10*6/kg",
              "display": "million per kilogram"
            },
            {
              "code": "10*6/L",
              "display": "million per liter"
            },
            {
              "code": "10*6/mL",
              "display": "million per milliliter"
            },
            {
              "code": "10*6/mm3",
              "display": "(the number ten for arbitrary powers ^ 6) / (millimeter ^ 3)"
            },
            {
              "code": "10*6/uL",
              "display": "million per microliter"
            },
            {
              "code": "10*-6{Immunofluorescence'U}",
              "display": "(the number ten for arbitrary powers ^ -6) Immunofluorescence'U"
            },
            {
              "code": "10*8",
              "display": "TenToEighth"
            },
            {
              "code": "10*9/L",
              "display": "billion per liter"
            },
            {
              "code": "10*9/mL",
              "display": "billion per milliliter"
            },
            {
              "code": "10*9/uL",
              "display": "billion per microliter"
            },
            {
              "code": "10.L/(min.m2)",
              "display": "10 liter per minute per square meter"
            },
            {
              "code": "10.L/min",
              "display": "10 liter per minute"
            },
            {
              "code": "10.uN.s/(cm.m2)",
              "display": "10 * microNewton * second / centimeter * (meter ^ 2)"
            },
            {
              "code": "10.uN.s/cm",
              "display": "10 * microNewton * second / centimeter"
            },
            {
              "code": "10.uN.s/cm2",
              "display": "10 * microNewton * second / (centimeter ^ 2)"
            },
            {
              "code": "a",
              "display": "year"
            },
            {
              "code": "A/m",
              "display": "Ampère / meter"
            },
            {
              "code": "att",
              "display": "technical atmosphere"
            },
            {
              "code": "bar",
              "display": "bar"
            },
            {
              "code": "Cel",
              "display": "degree Celsius"
            },
            {
              "code": "cg",
              "display": "centigram"
            },
            {
              "code": "cL",
              "display": "centiliter"
            },
            {
              "code": "cm",
              "display": "centimeter"
            },
            {
              "code": "cm[H2O]",
              "display": "centimeter of water"
            },
            {
              "code": "cm[H2O]/(s.m)",
              "display": "centimeter of water column / second * meter"
            },
            {
              "code": "cm[H2O]/L/s",
              "display": "centimeter of water per liter per second"
            },
            {
              "code": "cm[Hg]",
              "display": "centimeter of mercury"
            },
            {
              "code": "cm2",
              "display": "square centimeter"
            },
            {
              "code": "cm2/s",
              "display": "square centimeter per second"
            },
            {
              "code": "cm3",
              "display": "cubic centimeter"
            },
            {
              "code": "cP",
              "display": "centiPoise"
            },
            {
              "code": "cSt",
              "display": "centiStokes"
            },
            {
              "code": "d",
              "display": "day"
            },
            {
              "code": "dB",
              "display": "decibel"
            },
            {
              "code": "deg",
              "display": "degree"
            },
            {
              "code": "deg/s",
              "display": "degree per second"
            },
            {
              "code": "dg",
              "display": "decigram"
            },
            {
              "code": "dL",
              "display": "deciliter"
            },
            {
              "code": "dm",
              "display": "decimeter"
            },
            {
              "code": "dm2/s2",
              "display": "square decimeter per square second"
            },
            {
              "code": "eq",
              "display": "equivalents"
            },
            {
              "code": "eq/L",
              "display": "equivalents / liter"
            },
            {
              "code": "eq/mL",
              "display": "equivalents / milliliter"
            },
            {
              "code": "eq/mmol",
              "display": "equivalents / millimole"
            },
            {
              "code": "eq/umol",
              "display": "equivalents / micromole"
            },
            {
              "code": "erg",
              "display": "erg"
            },
            {
              "code": "eV",
              "display": "electronvolt"
            },
            {
              "code": "fg",
              "display": "femtogram"
            },
            {
              "code": "fL",
              "display": "femtoliter"
            },
            {
              "code": "fL/nL",
              "display": "femtoliter / nanoliter"
            },
            {
              "code": "fm",
              "display": "femtometer"
            },
            {
              "code": "fmol",
              "display": "femtomole"
            },
            {
              "code": "fmol/g",
              "display": "femtomole per gram"
            },
            {
              "code": "fmol/L",
              "display": "femtomole per liter"
            },
            {
              "code": "fmol/mg",
              "display": "femtomole / milligram"
            },
            {
              "code": "fmol/mL",
              "display": "femtomole / milliliter"
            },
            {
              "code": "g",
              "display": "gram"
            },
            {
              "code": "g.m",
              "display": "gram * meter"
            },
            {
              "code": "g.m/({hb}.m2)",
              "display": "gram * meter / hb * (meter ^ 2)"
            },
            {
              "code": "g.m/{hb}",
              "display": "gram * meter / hb"
            },
            {
              "code": "g/(100.g)",
              "display": "gram per 100 gram"
            },
            {
              "code": "g/(12.h)",
              "display": "gram per 12 hour"
            },
            {
              "code": "g/(24.h)",
              "display": "gram per 24 hour"
            },
            {
              "code": "g/(3.d)",
              "display": "gram per 3 days"
            },
            {
              "code": "g/(4.h)",
              "display": "gram per 4 hour"
            },
            {
              "code": "g/(48.h)",
              "display": "gram per 48 hour"
            },
            {
              "code": "g/(5.h)",
              "display": "gram per 5 hour"
            },
            {
              "code": "g/(6.h)",
              "display": "gram per 6 hour"
            },
            {
              "code": "g/(72.h)",
              "display": "gram per 72 hour"
            },
            {
              "code": "g/(8.h)",
              "display": "gram / 8 * hour"
            },
            {
              "code": "g/(8.kg.h)",
              "display": "gram / 8 * kilogram * hour"
            },
            {
              "code": "g/(kg.h)",
              "display": "gram / kilogram * hour"
            },
            {
              "code": "g/(kg.min)",
              "display": "gram / kilogram * minute"
            },
            {
              "code": "g/{TotalWeight}",
              "display": "gram / TotalWeight"
            },
            {
              "code": "g/d",
              "display": "gram per day"
            },
            {
              "code": "g/dL",
              "display": "gram per deciliter"
            },
            {
              "code": "g/g",
              "display": "gram per gram"
            },
            {
              "code": "g/g{Cre}",
              "display": "gram / gram Cre"
            },
            {
              "code": "g/g{creat}",
              "display": "gram / gram creat"
            },
            {
              "code": "g/g{tissue}",
              "display": "gram per gram of tissue"
            },
            {
              "code": "g/h",
              "display": "gram per hour"
            },
            {
              "code": "g/h/m2",
              "display": "gram per hour per square meter"
            },
            {
              "code": "g/kg",
              "display": "gram per kilogram"
            },
            {
              "code": "g/kg/d",
              "display": "gram per kilogram per day"
            },
            {
              "code": "g/L",
              "display": "gram per liter"
            },
            {
              "code": "g/m2",
              "display": "grams Per Square Meter"
            },
            {
              "code": "g/mg",
              "display": "gram per milligram"
            },
            {
              "code": "g/min",
              "display": "gram per minute"
            },
            {
              "code": "g/mL",
              "display": "gram per milliliter"
            },
            {
              "code": "g/mmol",
              "display": "gram per millimole"
            },
            {
              "code": "g/mmol{creat}",
              "display": "gram / millimole creat"
            },
            {
              "code": "g/mol",
              "display": "gram per mole"
            },
            {
              "code": "GBq",
              "display": "gigaBecquerel"
            },
            {
              "code": "h",
              "display": "hour"
            },
            {
              "code": "hL",
              "display": "hectoliter"
            },
            {
              "code": "Hz",
              "display": "Hertz"
            },
            {
              "code": "[iU]",
              "display": "international unit"
            },
            {
              "code": "J",
              "display": "joule"
            },
            {
              "code": "J/L",
              "display": "joule per liter"
            },
            {
              "code": "K",
              "display": "Kelvin"
            },
            {
              "code": "K/W",
              "display": "Kelvin / Watt"
            },
            {
              "code": "k[IU]/L",
              "display": "kilo international unit per liter"
            },
            {
              "code": "k[IU]/mL",
              "display": "kilo international unit per milliliter"
            },
            {
              "code": "kat/kg",
              "display": "katal / kilogram"
            },
            {
              "code": "kat/L",
              "display": "katal / liter"
            },
            {
              "code": "kBq",
              "display": "kiloBecquerel"
            },
            {
              "code": "kcal",
              "display": "kilocalorie"
            },
            {
              "code": "kcal/(8.h)",
              "display": "kilocalorie / 8 * hour"
            },
            {
              "code": "kcal/h",
              "display": "kilocalorie per hour"
            },
            {
              "code": "kg",
              "display": "kilogram"
            },
            {
              "code": "kg.m/s",
              "display": "kilogram meter per second"
            },
            {
              "code": "kg/(s.m2)",
              "display": "kilogram per second per square meter"
            },
            {
              "code": "kg/h",
              "display": "kilogram per hour"
            },
            {
              "code": "kg/L",
              "display": "kilogram per liter"
            },
            {
              "code": "kg/m2",
              "display": "kilogram / (meter ^ 2)"
            },
            {
              "code": "kg/m3",
              "display": "kilogram / (meter ^ 3)"
            },
            {
              "code": "kg/min",
              "display": "kilogram / minute"
            },
            {
              "code": "kg/mol",
              "display": "kilogram per mole"
            },
            {
              "code": "kg/s",
              "display": "kilogram / second"
            },
            {
              "code": "kL",
              "display": "kiloliter"
            },
            {
              "code": "km",
              "display": "kilometer"
            },
            {
              "code": "kPa",
              "display": "kiloPascal"
            },
            {
              "code": "ks",
              "display": "kilosecond"
            },
            {
              "code": "kU/g",
              "display": "kiloenzyme Unit per gram"
            },
            {
              "code": "kU/h",
              "display": "kiloUnit / hour"
            },
            {
              "code": "kU/L",
              "display": "kiloenzyme Unit per liter"
            },
            {
              "code": "kU/mL",
              "display": "kilo enzyme unit per milliliter"
            },
            {
              "code": "L",
              "display": "liter"
            },
            {
              "code": "L.s2/s",
              "display": "liter * (second ^ 2) / second"
            },
            {
              "code": "L/(8.h)",
              "display": "liter per 8 hour"
            },
            {
              "code": "L/(min.m2)",
              "display": "liter per minute per square meter"
            },
            {
              "code": "L/d",
              "display": "liter per day"
            },
            {
              "code": "L/h",
              "display": "liter per hour"
            },
            {
              "code": "L/kg",
              "display": "liter per kilogram"
            },
            {
              "code": "L/L",
              "display": "liter per liter"
            },
            {
              "code": "L/min",
              "display": "liter per minute"
            },
            {
              "code": "L/s",
              "display": "liter / second"
            },
            {
              "code": "lm/m2",
              "display": "lumen / (meter ^ 2)"
            },
            {
              "code": "m",
              "display": "meter"
            },
            {
              "code": "m/s",
              "display": "meter per second"
            },
            {
              "code": "m/s2",
              "display": "meter per square second"
            },
            {
              "code": "m[iU]",
              "display": "milliinternational unit"
            },
            {
              "code": "m[IU]/L",
              "display": "milli international unit per liter"
            },
            {
              "code": "m[IU]/mL",
              "display": "milli international unit per milliliter"
            },
            {
              "code": "m2",
              "display": "square meter"
            },
            {
              "code": "m2/s",
              "display": "square meter per second"
            },
            {
              "code": "m3/s",
              "display": "cubic meter per second"
            },
            {
              "code": "mA",
              "display": "milliAmpère"
            },
            {
              "code": "mbar",
              "display": "millibar"
            },
            {
              "code": "mbar.s/L",
              "display": "millibar second per liter"
            },
            {
              "code": "MBq",
              "display": "megaBecquerel"
            },
            {
              "code": "mCi",
              "display": "milliCurie"
            },
            {
              "code": "meq",
              "display": "milliequivalent"
            },
            {
              "code": "meq/(12.h)",
              "display": "milliequivalent per 12 hour"
            },
            {
              "code": "meq/(2.h)",
              "display": "milliequivalent per 2 hour"
            },
            {
              "code": "meq/(24.h)",
              "display": "milliequivalent per 24 hour"
            },
            {
              "code": "meq/(8.h)",
              "display": "milliequivalent per 8 hour"
            },
            {
              "code": "meq/(8.h.kg)",
              "display": "milliequivalents / 8 * hour * kilogram"
            },
            {
              "code": "meq/(kg.d)",
              "display": "milliequivalents / kilogram * day"
            },
            {
              "code": "meq/{Specimen}",
              "display": "milliequivalents / Specimen"
            },
            {
              "code": "meq/d",
              "display": "milliequivalent per day"
            },
            {
              "code": "meq/dL",
              "display": "milliequivalent per deciliter"
            },
            {
              "code": "meq/g",
              "display": "milliequivalent per gram"
            },
            {
              "code": "meq/g{Cre}",
              "display": "milliequivalents / gram Cre"
            },
            {
              "code": "meq/h",
              "display": "milliequivalent per hour"
            },
            {
              "code": "meq/kg",
              "display": "milliequivalent per kilogram"
            },
            {
              "code": "meq/kg/h",
              "display": "milliequivalent per kilogram per hour"
            },
            {
              "code": "meq/kg/min",
              "display": "milliequivalents / kilogram / minute"
            },
            {
              "code": "meq/L",
              "display": "milliequivalent per liter"
            },
            {
              "code": "meq/m2",
              "display": "milliequivalent per square meter"
            },
            {
              "code": "meq/min",
              "display": "milliequivalent per minute"
            },
            {
              "code": "meq/mL",
              "display": "milliequivalent per milliliter"
            },
            {
              "code": "mg",
              "display": "milligram"
            },
            {
              "code": "mg/(10.h)",
              "display": "milligram per 10 hour"
            },
            {
              "code": "mg/(12.h)",
              "display": "milligram per 12 hour"
            },
            {
              "code": "mg/(18.h)",
              "display": "milligram per 18 hour"
            },
            {
              "code": "mg/(2.h)",
              "display": "milligram per 2 hour"
            },
            {
              "code": "mg/(24.h)",
              "display": "milligram per 24 hour"
            },
            {
              "code": "mg/(72.h)",
              "display": "milligram per 72 hour"
            },
            {
              "code": "mg/(8.h)",
              "display": "milligram per 8 hour"
            },
            {
              "code": "mg/(8.h.kg)",
              "display": "milligram / 8 * hour * kilogram"
            },
            {
              "code": "mg/(kg.h)",
              "display": "milligram / kilogram * hour"
            },
            {
              "code": "mg/{Hgb}/g",
              "display": "milligram / Hgb / gram"
            },
            {
              "code": "mg/{Specimen}",
              "display": "milligram / Specimen"
            },
            {
              "code": "mg/{Tot'Volume}",
              "display": "milligram / Tot'Volume"
            },
            {
              "code": "mg/{Volume}",
              "display": "milligram / Volume"
            },
            {
              "code": "mg/d",
              "display": "milligram per day"
            },
            {
              "code": "mg/d/(173.10*-2.m2)",
              "display": "milligram / day / 173 * (the number ten for arbitrary powers ^ -2) * (meter ^ 2)"
            },
            {
              "code": "mg/dL",
              "display": "milligram per deciliter"
            },
            {
              "code": "mg/g",
              "display": "milligram per gram"
            },
            {
              "code": "mg/g{Cre}",
              "display": "milligram / gram Cre"
            },
            {
              "code": "mg/g{creat}",
              "display": "milligram per gram of creatinine"
            },
            {
              "code": "mg/h",
              "display": "milligram per hour"
            },
            {
              "code": "mg/kg",
              "display": "milligram per kilogram"
            },
            {
              "code": "mg/kg/(24.h)",
              "display": "milligram / kilogram / 24 * hour"
            },
            {
              "code": "mg/kg/d",
              "display": "milligram per kilogram per day"
            },
            {
              "code": "mg/kg/min",
              "display": "milligram per kilogram per minute"
            },
            {
              "code": "mg/L",
              "display": "milligram per liter"
            },
            {
              "code": "mg/m2",
              "display": "milligram per square meter"
            },
            {
              "code": "mg/m3",
              "display": "milligram per cubic meter"
            },
            {
              "code": "mg/mg",
              "display": "milligram per milligram"
            },
            {
              "code": "mg/mg{cre}",
              "display": "milligram / milligram cre"
            },
            {
              "code": "mg/min",
              "display": "milligram per minute"
            },
            {
              "code": "mg/mL",
              "display": "milligram per milliliter"
            },
            {
              "code": "mg/mmol",
              "display": "milligram per millimole"
            },
            {
              "code": "mg/mmol{Cre}",
              "display": "milligram / millimole Cre"
            },
            {
              "code": "mg/mmol{creat}",
              "display": "milligram per millimole of creatinine"
            },
            {
              "code": "mg/wk",
              "display": "milligram per week"
            },
            {
              "code": "mg{Phenylketones}/dL",
              "display": "milligram Phenylketones / deciliter"
            },
            {
              "code": "min",
              "display": "minute"
            },
            {
              "code": "mL",
              "display": "milliliter"
            },
            {
              "code": "mL/({h'b}.m2)",
              "display": "milliliter / h'b * (meter ^ 2)"
            },
            {
              "code": "mL/(10.h)",
              "display": "milliliter per 10 hour"
            },
            {
              "code": "mL/(12.h)",
              "display": "milliliter per 12 hour"
            },
            {
              "code": "mL/(2.h)",
              "display": "milliliter per 2 hour"
            },
            {
              "code": "mL/(24.h)",
              "display": "milliliter per 24 hour"
            },
            {
              "code": "mL/(4.h)",
              "display": "milliliter per 4 hour"
            },
            {
              "code": "mL/(72.h)",
              "display": "milliliter per 72 hour"
            },
            {
              "code": "mL/(8.h)",
              "display": "milliliter per 8 hour"
            },
            {
              "code": "mL/(kg.min)",
              "display": "milliliter / kilogram * minute"
            },
            {
              "code": "mL/[sin_i]",
              "display": "milliliter per square inch (international)"
            },
            {
              "code": "mL/{h'b}",
              "display": "MilliLitersPerHeartbeat [SI Volume Units]"
            },
            {
              "code": "mL/cm[H2O]",
              "display": "milliliter / centimeter of water column"
            },
            {
              "code": "mL/d",
              "display": "milliliter per day"
            },
            {
              "code": "mL/dL",
              "display": "milliliter per deciliter"
            },
            {
              "code": "mL/h",
              "display": "milliliter per hour"
            },
            {
              "code": "mL/kg",
              "display": "milliliter per kilogram"
            },
            {
              "code": "mL/kg/(8.h)",
              "display": "milliliter per kilogram per 8 hour"
            },
            {
              "code": "mL/kg/d",
              "display": "milliliter per kilogram per day"
            },
            {
              "code": "mL/kg/h",
              "display": "milliliter per kilogram per hour"
            },
            {
              "code": "mL/kg/min",
              "display": "milliliter per kilogram per minute"
            },
            {
              "code": "mL/L",
              "display": "milliliter per liter"
            },
            {
              "code": "mL/m2",
              "display": "milliliter per square meter"
            },
            {
              "code": "mL/mbar",
              "display": "milliliter per millibar"
            },
            {
              "code": "mL/min",
              "display": "milliliter per minute"
            },
            {
              "code": "mL/min/(173.10*-2.m2)",
              "display": "milliliter / minute / 173 * (the number ten for arbitrary powers ^ -2) * (meter ^ 2)"
            },
            {
              "code": "mL/min/{1.73_m2}",
              "display": "milliliter per minute per 1.73 square meter"
            },
            {
              "code": "mL/min/m2",
              "display": "milliliter per minute per square meter"
            },
            {
              "code": "mL/mm",
              "display": "milliliter per millimeter"
            },
            {
              "code": "mL/s",
              "display": "milliliter per second"
            },
            {
              "code": "mm",
              "display": "millimeter"
            },
            {
              "code": "mm/h",
              "display": "millimeter per hour"
            },
            {
              "code": "mm/min",
              "display": "millimeter per minute"
            },
            {
              "code": "mm[H2O]",
              "display": "millimeter of water"
            },
            {
              "code": "mm[Hg]",
              "display": "millimeter of mercury"
            },
            {
              "code": "mm2",
              "display": "square millimeter"
            },
            {
              "code": "mm3",
              "display": "cubic millimeter"
            },
            {
              "code": "mmol",
              "display": "millimole"
            },
            {
              "code": "mmol/(12.h)",
              "display": "millimole per 12 hour"
            },
            {
              "code": "mmol/(18.h)",
              "display": "millimole per 18 hour"
            },
            {
              "code": "mmol/(2.h)",
              "display": "millimole per 2 hour"
            },
            {
              "code": "mmol/(24.h)",
              "display": "millimole per 24 hour"
            },
            {
              "code": "mmol/(6.h)",
              "display": "millimole per 6 hour"
            },
            {
              "code": "mmol/(8.h)",
              "display": "millimole per 8 hour"
            },
            {
              "code": "mmol/(8.h.kg)",
              "display": "millimole / 8 * hour * kilogram"
            },
            {
              "code": "mmol/{Tot'Volume}",
              "display": "millimole / Tot'Volume"
            },
            {
              "code": "mmol/d",
              "display": "millimole per day"
            },
            {
              "code": "mmol/dL",
              "display": "millimole per deciliter"
            },
            {
              "code": "mmol/g",
              "display": "millimole per gram"
            },
            {
              "code": "mmol/g{creat}",
              "display": "millimole per gram of creatinine"
            },
            {
              "code": "mmol/g{hemoglobin}",
              "display": "millimole per gram of hemoglobin"
            },
            {
              "code": "mmol/h",
              "display": "millimole per hour"
            },
            {
              "code": "mmol/h/mg{Hb}",
              "display": "millimole per hour per milligram of hemoglobin"
            },
            {
              "code": "mmol/h/mg{protein}",
              "display": "millimole per hour per milligram of protein"
            },
            {
              "code": "mmol/kg",
              "display": "millimole per kilogram"
            },
            {
              "code": "mmol/kg/d",
              "display": "millimole per kilogram per day"
            },
            {
              "code": "mmol/kg/h",
              "display": "millimole per kilogram per hour"
            },
            {
              "code": "mmol/kg/min",
              "display": "millimole per kilogram per minute"
            },
            {
              "code": "mmol/kg{H2O}",
              "display": "millimole per kilogram of water"
            },
            {
              "code": "mmol/L",
              "display": "millimole per liter"
            },
            {
              "code": "mmol/L/s",
              "display": "millimole per liter per second"
            },
            {
              "code": "mmol/m",
              "display": "millimole / meter"
            },
            {
              "code": "mmol/m2",
              "display": "millimole per square meter"
            },
            {
              "code": "mmol/min",
              "display": "millimole per minute"
            },
            {
              "code": "mmol/mmol",
              "display": "millimole per millimole"
            },
            {
              "code": "mmol/mol",
              "display": "millimole per mole"
            },
            {
              "code": "mmol/mol{creat}",
              "display": "millimole per mole of creatinine"
            },
            {
              "code": "mmol/s/L",
              "display": "millimole per second per liter"
            },
            {
              "code": "mo",
              "display": "month"
            },
            {
              "code": "mol",
              "display": "mole"
            },
            {
              "code": "mol/d",
              "display": "mole per day"
            },
            {
              "code": "mol/kg",
              "display": "mole per kilogram"
            },
            {
              "code": "mol/kg/s",
              "display": "mole per kilogram per second"
            },
            {
              "code": "mol/L",
              "display": "mole per liter"
            },
            {
              "code": "mol/m3",
              "display": "mole per cubic meter"
            },
            {
              "code": "mol/mL",
              "display": "mole per milliliter"
            },
            {
              "code": "mol/mol",
              "display": "mole per mole"
            },
            {
              "code": "mol/mol{creat}",
              "display": "mole / mole creat"
            },
            {
              "code": "mol/s",
              "display": "mole per second"
            },
            {
              "code": "mosm",
              "display": "milliosmole"
            },
            {
              "code": "mosm/kg",
              "display": "milliosmole per kilogram"
            },
            {
              "code": "mosm/L",
              "display": "milliosmole per liter"
            },
            {
              "code": "mPa",
              "display": "millipascal"
            },
            {
              "code": "ms",
              "display": "millisecond"
            },
            {
              "code": "mU",
              "display": "millienzyme Unit"
            },
            {
              "code": "mU/g",
              "display": "millienzyme Unit per gram"
            },
            {
              "code": "mU/g{Hgb}",
              "display": "milliUnit / gram Hgb"
            },
            {
              "code": "mU/L",
              "display": "millienzyme Unit per liter"
            },
            {
              "code": "mU/mg",
              "display": "milliUnit / milligram"
            },
            {
              "code": "mU/mg{Cre}",
              "display": "milliUnit / milligram Cre"
            },
            {
              "code": "mU/min",
              "display": "milliUnit / minute"
            },
            {
              "code": "mU/mL",
              "display": "millienzyme Unit per milliliter"
            },
            {
              "code": "mU/mL/min",
              "display": "millienzyme Unit per milliliter per minute"
            },
            {
              "code": "mU/mmol{creatinine}",
              "display": "millienzyme Unit per millimole of creatinine"
            },
            {
              "code": "mU/mmol{RBCs}",
              "display": "millienzyme Unit per millimole of red blood cells"
            },
            {
              "code": "mV",
              "display": "milliVolt"
            },
            {
              "code": "N",
              "display": "Newton"
            },
            {
              "code": "N.cm",
              "display": "Newton centimeter"
            },
            {
              "code": "N.s",
              "display": "Newton second"
            },
            {
              "code": "nCi",
              "display": "nanoCurie"
            },
            {
              "code": "ng",
              "display": "nanogram"
            },
            {
              "code": "ng/(24.h)",
              "display": "nanogram per 24 hour"
            },
            {
              "code": "ng/(8.h)",
              "display": "nanogram per 8 hour"
            },
            {
              "code": "ng/(8.h.kg)",
              "display": "nanogram / 8 * hour * kilogram"
            },
            {
              "code": "ng/(kg.d)",
              "display": "nanogram / kilogram * day"
            },
            {
              "code": "ng/(kg.h)",
              "display": "nanogram / kilogram * hour"
            },
            {
              "code": "ng/(kg.min)",
              "display": "nanogram / kilogram * minute"
            },
            {
              "code": "ng/10*6",
              "display": "nanogram per million"
            },
            {
              "code": "ng/d",
              "display": "nanogram per day"
            },
            {
              "code": "ng/dL",
              "display": "nanogram per deciliter"
            },
            {
              "code": "ng/dL/h",
              "display": "nanogram / deciliter / hour"
            },
            {
              "code": "ng/g",
              "display": "nanogram per gram"
            },
            {
              "code": "ng/g{Cre}",
              "display": "nanogram / gram Cre"
            },
            {
              "code": "ng/g{creat}",
              "display": "nanogram per gram of creatinine"
            },
            {
              "code": "ng/h",
              "display": "nanogram per hour"
            },
            {
              "code": "ng/kg",
              "display": "nanogram per kilogram"
            },
            {
              "code": "ng/kg/(8.h)",
              "display": "nanogram per kilogram per 8 hour"
            },
            {
              "code": "ng/kg/h",
              "display": "nanogram per kilogram per hour"
            },
            {
              "code": "ng/kg/min",
              "display": "nanogram per kilogram per minute"
            },
            {
              "code": "ng/L",
              "display": "nanogram per liter"
            },
            {
              "code": "ng/m2",
              "display": "nanogram per square meter"
            },
            {
              "code": "ng/mg",
              "display": "nanogram per milligram"
            },
            {
              "code": "ng/mg/h",
              "display": "nanogram per milligram per hour"
            },
            {
              "code": "ng/mg{Protein}",
              "display": "nanogram / milligram Protein"
            },
            {
              "code": "ng/min",
              "display": "nanogram per minute"
            },
            {
              "code": "ng/mL",
              "display": "nanogram per millliiter"
            },
            {
              "code": "ng/mL/h",
              "display": "nanogram per milliliter per hour"
            },
            {
              "code": "ng/mL{rbc}",
              "display": "nanogram / milliliter rbc"
            },
            {
              "code": "ng/s",
              "display": "nanogram per second"
            },
            {
              "code": "nkat",
              "display": "nanokatal"
            },
            {
              "code": "nL",
              "display": "nanoliter"
            },
            {
              "code": "nm",
              "display": "nanometer"
            },
            {
              "code": "nm/s/L",
              "display": "nanometer per second per liter"
            },
            {
              "code": "nmol",
              "display": "nanomole"
            },
            {
              "code": "nmol/(24.h)",
              "display": "nanomole per 24 hour"
            },
            {
              "code": "nmol/d",
              "display": "nanomole per day"
            },
            {
              "code": "nmol/dL",
              "display": "nanomole per deciliter"
            },
            {
              "code": "nmol/g",
              "display": "nanomole per gram"
            },
            {
              "code": "nmol/g{Cre}",
              "display": "nanomole / gram Cre"
            },
            {
              "code": "nmol/g{creat}",
              "display": "nanomole per gram of creatinine"
            },
            {
              "code": "nmol/g{dry_wt}",
              "display": "nanomole per gram of dry weight"
            },
            {
              "code": "nmol/h/L",
              "display": "nanomole per hour per liter"
            },
            {
              "code": "nmol/h/mg{protein}",
              "display": "nanomole per hour per milligram of protein"
            },
            {
              "code": "nmol/h/mL",
              "display": "nanomole per hour per milliliter"
            },
            {
              "code": "nmol/L",
              "display": "nanomole per liter"
            },
            {
              "code": "nmol/L/mmol{creat}",
              "display": "nanomole per liter per millimole of creatinine"
            },
            {
              "code": "nmol/L/s",
              "display": "nanomole per liter per second"
            },
            {
              "code": "nmol/L{RBCs}",
              "display": "nanomole per liter of red blood cells"
            },
            {
              "code": "nmol/m/mg{protein}",
              "display": "nanomole per meter per milligram of protein"
            },
            {
              "code": "nmol/mg",
              "display": "nanomole per milligram"
            },
            {
              "code": "nmol/mg/h",
              "display": "nanomole per milligram per hour"
            },
            {
              "code": "nmol/min/mg{hemoglobin}",
              "display": "nanomole per minute per milligram of hemoglobin"
            },
            {
              "code": "nmol/min/mg{protein}",
              "display": "nanomole per minute per milligram of protein"
            },
            {
              "code": "nmol/min/mL",
              "display": "nanomole per minute per milliliter"
            },
            {
              "code": "nmol/mL",
              "display": "nanomole per milliliter"
            },
            {
              "code": "nmol/mL/h",
              "display": "nanomole per milliliter per hour"
            },
            {
              "code": "nmol/mL/min",
              "display": "nanomole per milliliter per minute"
            },
            {
              "code": "nmol/mmol",
              "display": "nanomole per millimole"
            },
            {
              "code": "nmol/mmol{Cre}",
              "display": "nanomole / millimole Cre"
            },
            {
              "code": "nmol/mmol{creat}",
              "display": "nanomole per millimole of creatinine"
            },
            {
              "code": "nmol/mol",
              "display": "nanomole per mole"
            },
            {
              "code": "nmol/nmol",
              "display": "nanomole per nanomole"
            },
            {
              "code": "nmol/s",
              "display": "nanomole per second"
            },
            {
              "code": "nmol/s/L",
              "display": "nanomole per second per liter"
            },
            {
              "code": "nmol/umol{creat}",
              "display": "nanomole per micromole  of creatinine"
            },
            {
              "code": "ns",
              "display": "nanosecond"
            },
            {
              "code": "Ohm",
              "display": "Ohm"
            },
            {
              "code": "osm/kg",
              "display": "osmole per kilogram"
            },
            {
              "code": "osm/L",
              "display": "osmole per liter"
            },
            {
              "code": "Pa",
              "display": "Pascal"
            },
            {
              "code": "pg",
              "display": "picogram"
            },
            {
              "code": "pg/dL",
              "display": "picogram per deciliter"
            },
            {
              "code": "pg/L",
              "display": "picogram per liter"
            },
            {
              "code": "pg/mg",
              "display": "picogram per milligram"
            },
            {
              "code": "pg/mL",
              "display": "picogram per milliliter"
            },
            {
              "code": "pg/mm",
              "display": "picogram per millimeter"
            },
            {
              "code": "pkat",
              "display": "picokatal"
            },
            {
              "code": "pL",
              "display": "picoliter"
            },
            {
              "code": "pm",
              "display": "picometer"
            },
            {
              "code": "pmol",
              "display": "picomole"
            },
            {
              "code": "pmol/d",
              "display": "picomole per day"
            },
            {
              "code": "pmol/dL",
              "display": "picomole per deciliter"
            },
            {
              "code": "pmol/g",
              "display": "picomole per gram"
            },
            {
              "code": "pmol/h/mg{protein}",
              "display": "picomole per hour per milligram of protein"
            },
            {
              "code": "pmol/h/mL",
              "display": "picomole per hour per milliliter"
            },
            {
              "code": "pmol/L",
              "display": "picomole per liter"
            },
            {
              "code": "pmol/mg{protein}",
              "display": "picomole per milligram of protein"
            },
            {
              "code": "pmol/min",
              "display": "picomole per minute"
            },
            {
              "code": "pmol/min/mg{protein}",
              "display": "picomole per minute per milligram of protein"
            },
            {
              "code": "pmol/mL",
              "display": "picomole per milliliter"
            },
            {
              "code": "pmol/mmol",
              "display": "picomole per millimole"
            },
            {
              "code": "pmol/mmol{creat}",
              "display": "picomole per millimole of creatinine"
            },
            {
              "code": "pmol/mol",
              "display": "picomole per mole"
            },
            {
              "code": "pmol/umol",
              "display": "picomole per micromole"
            },
            {
              "code": "pmol/umol{creat}",
              "display": "picomole per micromole of creatinine"
            },
            {
              "code": "ps",
              "display": "picosecond"
            },
            {
              "code": "pT",
              "display": "picotesla"
            },
            {
              "code": "s",
              "display": "second"
            },
            {
              "code": "St",
              "display": "Stokes"
            },
            {
              "code": "t",
              "display": "tonne"
            },
            {
              "code": "U",
              "display": "enzyme Unit"
            },
            {
              "code": "U/(1.h)",
              "display": "enzyme Unit per 1 hour"
            },
            {
              "code": "U/(12.h)",
              "display": "enzyme unit per 12 hour"
            },
            {
              "code": "U/(18.h)",
              "display": "enzyme Unit per 18 hour"
            },
            {
              "code": "U/(2.h)",
              "display": "enzyme unit per 2 hour"
            },
            {
              "code": "U/(24.h)",
              "display": "enzyme unit per 24 hour"
            },
            {
              "code": "U/10*10{cells}",
              "display": "enzyme unit per 10 billion cells"
            },
            {
              "code": "U/10*12",
              "display": "enzyme unit per trillion"
            },
            {
              "code": "U/10*6",
              "display": "enzyme unit per million"
            },
            {
              "code": "U/10*9",
              "display": "enzyme unit per billion"
            },
            {
              "code": "U/d",
              "display": "enzyme unit per day"
            },
            {
              "code": "U/dL",
              "display": "enzyme unit per deciliter"
            },
            {
              "code": "U/g",
              "display": "enzyme unit per gram"
            },
            {
              "code": "U/g{Cre}",
              "display": "Unit / gram Cre"
            },
            {
              "code": "U/g{Hb}",
              "display": "enzyme unit per gram of hemoglobin"
            },
            {
              "code": "U/g{hemoglobin}",
              "display": "enzyme Unit per gram of hemoglobin"
            },
            {
              "code": "U/g{Hgb}",
              "display": "UnitsPerGramHemoglobin"
            },
            {
              "code": "U/h",
              "display": "enzyme unit per hour"
            },
            {
              "code": "U/kg/h",
              "display": "Unit / kilogram / hour"
            },
            {
              "code": "U/kg{Hb}",
              "display": "enzyme unit per kilogram of hemoglobin"
            },
            {
              "code": "U/kg{hemoglobin}",
              "display": "enzyme Unit per kilogram of hemoglobin"
            },
            {
              "code": "U/L",
              "display": "enzyme unit per liter"
            },
            {
              "code": "U/min",
              "display": "enzyme unit per minute"
            },
            {
              "code": "U/mL",
              "display": "enzyme unit per milliliter"
            },
            {
              "code": "U/mL{RBC}",
              "display": "Unit / milliliter RBC"
            },
            {
              "code": "U/mL{RBCs}",
              "display": "enzyme unit per milliliter of red blood cells"
            },
            {
              "code": "U/mmol{creat}",
              "display": "enzyme unit per millimole of creatinine"
            },
            {
              "code": "U/mol",
              "display": "enzyme Unit per mole"
            },
            {
              "code": "U/s",
              "display": "enzyme unit per second"
            },
            {
              "code": "U/umol",
              "display": "enzyme Unit per micromole"
            },
            {
              "code": "u[IU]",
              "display": "micro international unit"
            },
            {
              "code": "u[IU]/L",
              "display": "microinternational unit per liter"
            },
            {
              "code": "u[IU]/mL",
              "display": "micro international unit per milliliter"
            },
            {
              "code": "ueq",
              "display": "microequivalents"
            },
            {
              "code": "ueq/L",
              "display": "microequivalent per liter"
            },
            {
              "code": "ueq/mL",
              "display": "microequivalent per milliliter"
            },
            {
              "code": "ug",
              "display": "microgram"
            },
            {
              "code": "ug/(24.h)",
              "display": "microgram per 24 hour"
            },
            {
              "code": "ug/(8.h)",
              "display": "microgram per 8 hour"
            },
            {
              "code": "ug/(kg.d)",
              "display": "microgram / kilogram * day"
            },
            {
              "code": "ug/(kg.h)",
              "display": "microgram / kilogram * hour"
            },
            {
              "code": "ug/{Specimen}",
              "display": "microgram / Specimen"
            },
            {
              "code": "ug/{TotalVolume}",
              "display": "MicroGramsPerTotalVolume"
            },
            {
              "code": "ug/d",
              "display": "microgram per day"
            },
            {
              "code": "ug/dL",
              "display": "microgram per deciliter"
            },
            {
              "code": "ug/dL{rbc}",
              "display": "microgram / deciliter rbc"
            },
            {
              "code": "ug/g",
              "display": "microgram per gram"
            },
            {
              "code": "ug/g{Cre}",
              "display": "microgram / gram Cre"
            },
            {
              "code": "ug/g{creat}",
              "display": "microgram per gram of creatinine"
            },
            {
              "code": "ug/g{DryWeight}",
              "display": "microgram / gram DryWeight"
            },
            {
              "code": "ug/g{Hgb}",
              "display": "microgram / gram Hgb"
            },
            {
              "code": "ug/g{Tissue}",
              "display": "microgram / gram Tissue"
            },
            {
              "code": "ug/h",
              "display": "microgram per hour"
            },
            {
              "code": "ug/kg",
              "display": "microgram per kilogram"
            },
            {
              "code": "ug/kg/(8.h)",
              "display": "microgram per kilogram per 8 hour"
            },
            {
              "code": "ug/kg/d",
              "display": "microgram per kilogram per day"
            },
            {
              "code": "ug/kg/h",
              "display": "microgram per kilogram per hour"
            },
            {
              "code": "ug/kg/min",
              "display": "microgram per kilogram per minute"
            },
            {
              "code": "ug/L",
              "display": "microgram per liter"
            },
            {
              "code": "ug/L/(24.h)",
              "display": "microgram per liter per 24 hour"
            },
            {
              "code": "ug/L{DDU}",
              "display": "microgram / liter DDU"
            },
            {
              "code": "ug/m2",
              "display": "microgram per square meter"
            },
            {
              "code": "ug/mg",
              "display": "microgram per milligram"
            },
            {
              "code": "ug/mg{Cre}",
              "display": "microgram / milligram Cre"
            },
            {
              "code": "ug/mg{creat}",
              "display": "microgram per milligram of creatinine"
            },
            {
              "code": "ug/min",
              "display": "microgram per minute"
            },
            {
              "code": "ug/mL",
              "display": "microgram per milliliter"
            },
            {
              "code": "ug/mL{FEU}",
              "display": "microgram / milliliter FEU"
            },
            {
              "code": "ug/mmol",
              "display": "microgram per millimole"
            },
            {
              "code": "ug/ng",
              "display": "microgram per nanogram"
            },
            {
              "code": "ug{T4}/dL",
              "display": "microgram T4 / deciliter"
            },
            {
              "code": "ukat",
              "display": "microkatal"
            },
            {
              "code": "uL",
              "display": "microliter"
            },
            {
              "code": "uL/(2.h)",
              "display": "microliter per 2 hour"
            },
            {
              "code": "uL/h",
              "display": "microliter per hour"
            },
            {
              "code": "um",
              "display": "micrometer"
            },
            {
              "code": "um/s",
              "display": "micrometer per second"
            },
            {
              "code": "umol",
              "display": "micromole"
            },
            {
              "code": "umol/(24.h)",
              "display": "micromole per 24 hour"
            },
            {
              "code": "umol/d",
              "display": "micromole per day"
            },
            {
              "code": "umol/dL",
              "display": "micromole per deciliter"
            },
            {
              "code": "umol/g",
              "display": "micromole per gram"
            },
            {
              "code": "umol/g{Cre}",
              "display": "micromole / gram Cre"
            },
            {
              "code": "umol/g{creat}",
              "display": "micromole per gram of creatinine"
            },
            {
              "code": "umol/g{Hb}",
              "display": "micromole per gram of hemoglobin"
            },
            {
              "code": "umol/g{hemoglobin}",
              "display": "micromole per gram of hemoglobin"
            },
            {
              "code": "umol/g{Hgb}",
              "display": "micromole / gram Hgb"
            },
            {
              "code": "umol/h",
              "display": "micromole per hour"
            },
            {
              "code": "umol/h/g",
              "display": "micromole / hour / gram"
            },
            {
              "code": "umol/h/L",
              "display": "micromole per hour per liter"
            },
            {
              "code": "umol/h/mg{protein}",
              "display": "micromole per hour per milligram of protein"
            },
            {
              "code": "umol/kg",
              "display": "micromole per kilogram"
            },
            {
              "code": "umol/L",
              "display": "micromole per liter"
            },
            {
              "code": "umol/L/h",
              "display": "micromole per liter per hour"
            },
            {
              "code": "umol/L{rbc}",
              "display": "micromole per liter of red blood cells"
            },
            {
              "code": "umol/m",
              "display": "micromole / meter"
            },
            {
              "code": "umol/mg",
              "display": "micromole per milligram"
            },
            {
              "code": "umol/mg{Cre}",
              "display": "micromole / milligram Cre"
            },
            {
              "code": "umol/min",
              "display": "micromole per minute"
            },
            {
              "code": "umol/min/g",
              "display": "micromole per minute per gram"
            },
            {
              "code": "umol/min/g{prot}",
              "display": "micromole / minute / gram prot"
            },
            {
              "code": "umol/min/g{protein}",
              "display": "micromole per minute per gram of protein"
            },
            {
              "code": "umol/min/L",
              "display": "micromole per minute per liter"
            },
            {
              "code": "umol/mL",
              "display": "micromole per milliliter"
            },
            {
              "code": "umol/mL/min",
              "display": "micromole per milliliter per minute"
            },
            {
              "code": "umol/mmol",
              "display": "micromole per millimole"
            },
            {
              "code": "umol/mol",
              "display": "micromole per mole"
            },
            {
              "code": "umol/mol{Cre}",
              "display": "micromole / mole Cre"
            },
            {
              "code": "umol/mol{creat}",
              "display": "micromole per mole of creatinine"
            },
            {
              "code": "umol/mol{Hb}",
              "display": "micromole per mole of hemoglobin"
            },
            {
              "code": "umol/umol",
              "display": "micromole per micromole"
            },
            {
              "code": "uOhm",
              "display": "microOhm"
            },
            {
              "code": "us",
              "display": "microsecond"
            },
            {
              "code": "uU",
              "display": "microUnit"
            },
            {
              "code": "uU/g",
              "display": "micro enzyme unit per gram"
            },
            {
              "code": "uU/L",
              "display": "micro enzyme unit per liter"
            },
            {
              "code": "uU/mL",
              "display": "micro enzyme unit per milliliter"
            },
            {
              "code": "uV",
              "display": "microvolt"
            },
            {
              "code": "V",
              "display": "volt"
            },
            {
              "code": "wk",
              "display": "week"
            },
            {
              "code": "10.uN.s/(cm5.m2)",
              "display": "10 micronewton second per centimeter to the fifth power per square meter"
            },
            {
              "code": "10*4/uL",
              "display": "10 thousand per microliter"
            },
            {
              "code": "24.h",
              "display": "24 hour"
            },
            {
              "code": "A",
              "display": "Ampère"
            },
            {
              "code": "{ARU}",
              "display": "aspirin response unit"
            },
            {
              "code": "atm",
              "display": "standard atmosphere"
            },
            {
              "code": "ag/{cell}",
              "display": "attogram per cell"
            },
            {
              "code": "Bq",
              "display": "Becquerel"
            },
            {
              "code": "{binding_index}",
              "display": "binding index"
            },
            {
              "code": "[bdsk'U]",
              "display": "Bodansky unit"
            },
            {
              "code": "{CAG_repeats}",
              "display": "CAG trinucleotide repeats"
            },
            {
              "code": "cal",
              "display": "calorie"
            },
            {
              "code": "cm[H2O]/s/m",
              "display": "centimeter of water per second per meter"
            },
            {
              "code": "{delta_OD}",
              "display": "change in (delta) optical density"
            },
            {
              "code": "{copies}",
              "display": "copies"
            },
            {
              "code": "{count}",
              "display": "count"
            },
            {
              "code": "{CPM}",
              "display": "counts per minute"
            },
            {
              "code": "{CPM}/10*3{cell}",
              "display": "counts per minute per thousand cells"
            },
            {
              "code": "daL/min",
              "display": "dekaliter per minute"
            },
            {
              "code": "daL/min/m2",
              "display": "dekaliter per minute per square meter"
            },
            {
              "code": "{dilution}",
              "display": "dilution"
            },
            {
              "code": "dyn.s/cm",
              "display": "dyne second per centimeter"
            },
            {
              "code": "dyn.s/(cm.m2)",
              "display": "dyne second per centimeter per square meter"
            },
            {
              "code": "{Ehrlich'U}/100.g",
              "display": "Ehrlich unit per 100 gram"
            },
            {
              "code": "{EIA_index}",
              "display": "EIA index"
            },
            {
              "code": "{EIA_titer}",
              "display": "EIA titer"
            },
            {
              "code": "{EV}",
              "display": "EIA value"
            },
            {
              "code": "U/10",
              "display": "enzyme unit per 10"
            },
            {
              "code": "U/10*10",
              "display": "enzyme unit per 10 billion"
            },
            {
              "code": "U/(10.g){feces}",
              "display": "enzyme unit per 10 gram of feces"
            },
            {
              "code": "U/g{creat}",
              "display": "enzyme unit per gram of creatinine"
            },
            {
              "code": "U/g{protein}",
              "display": "enzyme unit per gram of protein"
            },
            {
              "code": "U{25Cel}/L",
              "display": "enzyme unit per liter at 25 deg Celsius"
            },
            {
              "code": "U{37Cel}/L",
              "display": "enzyme unit per liter at 37 deg Celsius"
            },
            {
              "code": "U/10*12{RBCs}",
              "display": "enzyme unit per trillion red blood cells"
            },
            {
              "code": "F",
              "display": "Farad"
            },
            {
              "code": "fmol/mg{cytosol_protein}",
              "display": "femtomole per milligram of cytosol protein"
            },
            {
              "code": "fmol/mg{protein}",
              "display": "femtomole per milligram of protein"
            },
            {
              "code": "{FIU}",
              "display": "fluorescent intensity unit"
            },
            {
              "code": "{fraction}",
              "display": "fraction"
            },
            {
              "code": "{GAA_repeats}",
              "display": "GAA trinucleotide repeats"
            },
            {
              "code": "{genomes}/mL",
              "display": "genomes per milliliter"
            },
            {
              "code": "{Globules}/[HPF]",
              "display": "globules (drops)  per high power field"
            },
            {
              "code": "g.m/{beat}",
              "display": "gram meter per heart beat"
            },
            {
              "code": "g{creat}",
              "display": "gram of creatinine"
            },
            {
              "code": "g{Hb}",
              "display": "gram of hemoglobin"
            },
            {
              "code": "g{total_nit}",
              "display": "gram of total nitrogen"
            },
            {
              "code": "g{total_prot}",
              "display": "gram of total protein"
            },
            {
              "code": "g{wet_tissue}",
              "display": "gram of wet tissue"
            },
            {
              "code": "g/kg/(8.h)",
              "display": "gram per  kilogram per 8 hour"
            },
            {
              "code": "g/(8.h){shift}",
              "display": "gram per 8 hour shift"
            },
            {
              "code": "g/cm3",
              "display": "gram per cubic centimeter"
            },
            {
              "code": "g/g{globulin}",
              "display": "gram per gram of globulin"
            },
            {
              "code": "g/kg/(8.h){shift}",
              "display": "gram per kilogram per 8 hour shift"
            },
            {
              "code": "g/kg/h",
              "display": "gram per kilogram per hour"
            },
            {
              "code": "g/kg/min",
              "display": "gram per kilogram per minute"
            },
            {
              "code": "g/mol{creat}",
              "display": "gram per mole of creatinine"
            },
            {
              "code": "g/{specimen}",
              "display": "gram per specimen"
            },
            {
              "code": "g/{total_output}",
              "display": "gram per total output"
            },
            {
              "code": "g/{total_weight}",
              "display": "gram per total weight"
            },
            {
              "code": "Gy",
              "display": "Gray"
            },
            {
              "code": "{beats}/min",
              "display": "heart beats per minute"
            },
            {
              "code": "H",
              "display": "Henry"
            },
            {
              "code": "[HPF]",
              "display": "high power field"
            },
            {
              "code": "[GPL'U]/mL",
              "display": "IgG anticardiolipin unit per milliliter**"
            },
            {
              "code": "{GPS'U}",
              "display": "IgG antiphosphatidylserine unit"
            },
            {
              "code": "[MPL'U]/mL",
              "display": "IgM anticardiolipin unit per milliliter**"
            },
            {
              "code": "{ISR}",
              "display": "immune status ratio"
            },
            {
              "code": "{IFA_index}",
              "display": "immunofluorescence assay index"
            },
            {
              "code": "{IFA_titer}",
              "display": "Immunofluorescence assay titer"
            },
            {
              "code": "[in_i'H2O]",
              "display": "inch (international) of water"
            },
            {
              "code": "{index_val}",
              "display": "index value"
            },
            {
              "code": "{HA_titer}",
              "display": "influenza hemagglutination titer"
            },
            {
              "code": "[IU]",
              "display": "international unit"
            },
            {
              "code": "[IU]/L{37Cel}",
              "display": "international unit per liter at 37 degrees Celsius"
            },
            {
              "code": "[IU]/mg{creat}",
              "display": "international unit per milligram of creatinine"
            },
            {
              "code": "kat",
              "display": "katal"
            },
            {
              "code": "kU",
              "display": "kilo enzyme unit"
            },
            {
              "code": "kU/L{class}",
              "display": "kilo enzyme unit per liter class"
            },
            {
              "code": "kcal/d",
              "display": "kilocalorie per day"
            },
            {
              "code": "kcal/kg/(24.h)",
              "display": "kilocalorie per kilogram per 24 hour"
            },
            {
              "code": "kcal/[oz_av]",
              "display": "kilocalorie per ounce (US & British)"
            },
            {
              "code": "[ka'U]",
              "display": "King Armstrong unit"
            },
            {
              "code": "L/(24.h)",
              "display": "liter per 24 hour"
            },
            {
              "code": "L/s/s2",
              "display": "liter per second per square second"
            },
            {
              "code": "{Log_copies}/mL",
              "display": "log (base 10) copies per milliliter"
            },
            {
              "code": "{Log_IU}",
              "display": "log (base 10) international unit"
            },
            {
              "code": "{Log_IU}/mL",
              "display": "log (base 10) international unit per milliliter"
            },
            {
              "code": "{Log}",
              "display": "log base 10"
            },
            {
              "code": "[LPF]",
              "display": "low power field"
            },
            {
              "code": "lm",
              "display": "lumen"
            },
            {
              "code": "lm.m2",
              "display": "lumen square meter"
            },
            {
              "code": "{Lyme_index_value}",
              "display": "Lyme index value"
            },
            {
              "code": "[mclg'U]",
              "display": "Mac Lagan unit"
            },
            {
              "code": "Ms",
              "display": "megasecond"
            },
            {
              "code": "ug/g{feces}",
              "display": "microgram  per gram of feces"
            },
            {
              "code": "ug{FEU}/mL",
              "display": "microgram fibrinogen equivalent unit per milliliter"
            },
            {
              "code": "ug/(100.g)",
              "display": "microgram per 100 gram"
            },
            {
              "code": "ug/m3",
              "display": "microgram per cubic meter"
            },
            {
              "code": "ug/dL{RBCs}",
              "display": "microgram per deciliter of red blood cells"
            },
            {
              "code": "ug/g{dry_tissue}",
              "display": "microgram per gram of dry tissue"
            },
            {
              "code": "ug/g{dry_wt}",
              "display": "microgram per gram of dry weight"
            },
            {
              "code": "ug/g{hair}",
              "display": "microgram per gram of hair"
            },
            {
              "code": "ug/g{Hb}",
              "display": "microgram per gram of hemoglobin"
            },
            {
              "code": "ug/g{tissue}",
              "display": "microgram per gram of tissue"
            },
            {
              "code": "ug/L{RBCs}",
              "display": "microgram per liter of red blood cells"
            },
            {
              "code": "ug/mL{class}",
              "display": "microgram per milliliter class"
            },
            {
              "code": "ug/mL{eqv}",
              "display": "microgram per milliliter equivalent"
            },
            {
              "code": "ug/mmol{creat}",
              "display": "microgram per millimole of creatinine"
            },
            {
              "code": "ug/{specimen}",
              "display": "microgram per specimen"
            },
            {
              "code": "ug/[sft_i]",
              "display": "microgram per square foot (international)"
            },
            {
              "code": "umol{BCE}/mol",
              "display": "micromole bone collagen equivalent per mole"
            },
            {
              "code": "umol/(2.h)",
              "display": "micromole per 2 hour"
            },
            {
              "code": "umol/(8.h)",
              "display": "micromole per 8 hour"
            },
            {
              "code": "umol/dL{GF}",
              "display": "micromole per deciliter of glomerular filtrate"
            },
            {
              "code": "umol/kg{feces}",
              "display": "micromole per kilogram of feces"
            },
            {
              "code": "umol/L{RBCs}",
              "display": "micromole per liter of red blood cells"
            },
            {
              "code": "umol/umol{creat}",
              "display": "micromole per micromole of creatinine"
            },
            {
              "code": "umol/mg{creat}",
              "display": "micromole per milligram of creatinine"
            },
            {
              "code": "umol/mmol{creat}",
              "display": "micromole per millimole of creatinine"
            },
            {
              "code": "umol/min/g{mucosa}",
              "display": "micromole per minute per gram of mucosa"
            },
            {
              "code": "mU/mmol{creat}",
              "display": "milli  enzyme unit per millimole of creatinine"
            },
            {
              "code": "mU/g{Hb}",
              "display": "milli enzyme unit per gram of hemoglobin"
            },
            {
              "code": "mU/g{protein}",
              "display": "milli enzyme unit per gram of protein"
            },
            {
              "code": "mU/mg{creat}",
              "display": "milli enzyme unit per milligram of creatinine"
            },
            {
              "code": "mbar/L/s",
              "display": "millibar per liter per second"
            },
            {
              "code": "meq/g{creat}",
              "display": "milliequivalent per gram of creatinine"
            },
            {
              "code": "meq/{specimen}",
              "display": "milliequivalent per specimen"
            },
            {
              "code": "meq/{total_volume}",
              "display": "milliequivalent per total volume"
            },
            {
              "code": "mg{FEU}/L",
              "display": "milligram fibrinogen equivalent unit per liter"
            },
            {
              "code": "mg/(6.h)",
              "display": "milligram per 6 hour"
            },
            {
              "code": "mg/{collection}",
              "display": "milligram per collection"
            },
            {
              "code": "mg/d/{1.73_m2}",
              "display": "milligram per day per 1.73 square meter"
            },
            {
              "code": "mg/dL{RBCs}",
              "display": "milligram per deciliter of red blood cells"
            },
            {
              "code": "mg/g{dry_tissue}",
              "display": "milligram per gram of dry tissue"
            },
            {
              "code": "mg/g{feces}",
              "display": "milligram per gram of feces"
            },
            {
              "code": "mg/g{tissue}",
              "display": "milligram per gram of tissue"
            },
            {
              "code": "mg/g{wet_tissue}",
              "display": "milligram per gram of wet tissue"
            },
            {
              "code": "mg/kg/(8.h)",
              "display": "milligram per kilogram per 8 hour"
            },
            {
              "code": "mg/kg/h",
              "display": "milligram per kilogram per hour"
            },
            {
              "code": "mg/L{RBCs}",
              "display": "milligram per liter of red blood cells"
            },
            {
              "code": "mg/mg{creat}",
              "display": "milligram per milligram of creatinine"
            },
            {
              "code": "mg/{specimen}",
              "display": "milligram per specimen"
            },
            {
              "code": "mg/{total_output}",
              "display": "milligram per total output"
            },
            {
              "code": "mg/{total_volume}",
              "display": "milligram per total volume"
            },
            {
              "code": "mL{fetal_RBCs}",
              "display": "milliliter of fetal red blood cells"
            },
            {
              "code": "mL/(5.h)",
              "display": "milliliter per 5 hour"
            },
            {
              "code": "mL/(6.h)",
              "display": "milliliter per 6 hour"
            },
            {
              "code": "mL/{beat}",
              "display": "milliliter per heart beat"
            },
            {
              "code": "mL/{beat}/m2",
              "display": "milliliter per heart beat per  square meter"
            },
            {
              "code": "mmol/(5.h)",
              "display": "millimole per 5 hour"
            },
            {
              "code": "mmol/{ejaculate}",
              "display": "millimole per ejaculate"
            },
            {
              "code": "mmol/kg/(8.h)",
              "display": "millimole per kilogram per 8 hour"
            },
            {
              "code": "mmol/L{RBCs}",
              "display": "millimole per liter of red blood cells"
            },
            {
              "code": "mmol/mmol{urea}",
              "display": "millimole per millimole of urea"
            },
            {
              "code": "mmol/mmol{creat}",
              "display": "millimole per millmole of creatinine"
            },
            {
              "code": "mmol/{specimen}",
              "display": "millimole per specimen"
            },
            {
              "code": "mmol/{total_vol}",
              "display": "millimole per total volume"
            },
            {
              "code": "10*6.[CFU]/L",
              "display": "million colony forming unit per liter"
            },
            {
              "code": "10*6.[IU]",
              "display": "million international unit"
            },
            {
              "code": "10*6/(24.h)",
              "display": "million per 24 hour"
            },
            {
              "code": "mPa.s",
              "display": "millipascal second"
            },
            {
              "code": "{minidrop}/min",
              "display": "minidrop per minute"
            },
            {
              "code": "{minidrop}/s",
              "display": "minidrop per second"
            },
            {
              "code": "{molecule}/{platelet}",
              "display": "molecule per platelet"
            },
            {
              "code": "{mm/dd/yyyy}",
              "display": "month-day-year"
            },
            {
              "code": "{mutation}",
              "display": "mutation"
            },
            {
              "code": "nU/mL",
              "display": "nanoenzyme unit per milliliter"
            },
            {
              "code": "nU/{RBC}",
              "display": "nanoenzyme unit per red blood cell"
            },
            {
              "code": "ng{FEU}/mL",
              "display": "nanogram fibrinogen equivalent unit per milliliter"
            },
            {
              "code": "ng/U",
              "display": "nanogram per enzyme unit"
            },
            {
              "code": "ng/mg{creat}",
              "display": "nanogram per milligram of creatinine"
            },
            {
              "code": "ng/mg{protein}",
              "display": "nanogram per milligram of protein"
            },
            {
              "code": "ng/mL{RBCs}",
              "display": "nanogram per milliliter of red blood cells"
            },
            {
              "code": "ng/10*6{RBCs}",
              "display": "nanogram per million red blood cells"
            },
            {
              "code": "nmol{BCE}",
              "display": "nanomole bone collagen equivalent"
            },
            {
              "code": "nmol{BCE}/L",
              "display": "nanomole bone collagen equivalent per liter"
            },
            {
              "code": "nmol{BCE}/mmol{creat}",
              "display": "nanomole bone collagen equivalent per millimole of creatinine"
            },
            {
              "code": "nmol{1/2cys}/mg{protein}",
              "display": "nanomole of 1/2 cystine per milligram of protein"
            },
            {
              "code": "nmol{ATP}",
              "display": "nanomole of ATP"
            },
            {
              "code": "nmol/dL{GF}",
              "display": "nanomole per deciliter of glomerular filtrate"
            },
            {
              "code": "nmol/mg{creat}",
              "display": "nanomole per milligram of creatinine"
            },
            {
              "code": "nmol/mg{protein}",
              "display": "nanomole per milligram of protein"
            },
            {
              "code": "nmol/mg{protein}/h",
              "display": "nanomole per milligram of protein per hour"
            },
            {
              "code": "nmol/min",
              "display": "nanomole per minute"
            },
            {
              "code": "nmol/min/mg{Hb}",
              "display": "nanomole per minute per milligram of hemoglobin"
            },
            {
              "code": "nmol/min/10*6{cells}",
              "display": "nanomole per minute per million cells"
            },
            {
              "code": "{#}/[HPF]",
              "display": "number per high power field"
            },
            {
              "code": "{#}/L",
              "display": "number per liter"
            },
            {
              "code": "{#}/[LPF]",
              "display": "number per low power field"
            },
            {
              "code": "{#}/uL",
              "display": "number per microliter"
            },
            {
              "code": "{#}/mL",
              "display": "number per milliliter"
            },
            {
              "code": "{#}/min",
              "display": "number per minute"
            },
            {
              "code": "Ohm.m",
              "display": "Ohm meter"
            },
            {
              "code": "osm",
              "display": "osmole"
            },
            {
              "code": "{Pan_Bio'U}",
              "display": "panbio unit"
            },
            {
              "code": "/10*4{RBCs}",
              "display": "per 10 thousand red blood cells"
            },
            {
              "code": "/m3",
              "display": "per cubic meter"
            },
            {
              "code": "/{entity}",
              "display": "per entity"
            },
            {
              "code": "/g{Hb}",
              "display": "per gram of hemoglobin"
            },
            {
              "code": "/g{tot_nit}",
              "display": "per gram of total nitrogen"
            },
            {
              "code": "/g{tot_prot}",
              "display": "per gram of total protein"
            },
            {
              "code": "/g{wet_tis}",
              "display": "per gram of wet tissue"
            },
            {
              "code": "/[IU]",
              "display": "per international unit"
            },
            {
              "code": "/kg{body_wt}",
              "display": "per kilogram of body weight"
            },
            {
              "code": "/mm",
              "display": "per millimeter"
            },
            {
              "code": "/mmol{creat}",
              "display": "per millimole of creatinine"
            },
            {
              "code": "/{OIF}",
              "display": "per oil immersion field"
            },
            {
              "code": "/10*3",
              "display": "per thousand"
            },
            {
              "code": "/10*3.{RBCs}",
              "display": "per thousand red blood cells"
            },
            {
              "code": "/10*12{RBCs}",
              "display": "per trillion red blood cells"
            },
            {
              "code": "%{loss_AChR}",
              "display": "percent  loss of acetylcholine receptor"
            },
            {
              "code": "%{penetration}",
              "display": "percent  penetration"
            },
            {
              "code": "%{abnormal}",
              "display": "percent abnormal"
            },
            {
              "code": "%{activity}",
              "display": "percent activity"
            },
            {
              "code": "%{aggregation}",
              "display": "percent aggregation"
            },
            {
              "code": "%{at_60_min}",
              "display": "percent at 60 minute"
            },
            {
              "code": "%{basal_activity}",
              "display": "percent basal activity"
            },
            {
              "code": "%{binding}",
              "display": "percent binding"
            },
            {
              "code": "%{blockade}",
              "display": "percent blockade"
            },
            {
              "code": "%{blocked}",
              "display": "percent blocked"
            },
            {
              "code": "%{bound}",
              "display": "percent bound"
            },
            {
              "code": "%{breakdown}",
              "display": "percent breakdown"
            },
            {
              "code": "%{deficient}",
              "display": "percent deficient"
            },
            {
              "code": "%{dose}",
              "display": "percent dose"
            },
            {
              "code": "%{excretion}",
              "display": "percent excretion"
            },
            {
              "code": "%{Hb}",
              "display": "percent hemoglobin"
            },
            {
              "code": "%{hemolysis}",
              "display": "percent hemolysis"
            },
            {
              "code": "%{index}",
              "display": "percent index"
            },
            {
              "code": "%{inhibition}",
              "display": "percent inhibition"
            },
            {
              "code": "%{loss}",
              "display": "percent loss"
            },
            {
              "code": "%{lysis}",
              "display": "percent lysis"
            },
            {
              "code": "%{normal}",
              "display": "percent normal"
            },
            {
              "code": "%{normal_pooled_plasma}",
              "display": "percent normal pooled plasma"
            },
            {
              "code": "%{bacteria}",
              "display": "percent of bacteria"
            },
            {
              "code": "%{baseline}",
              "display": "percent of baseline"
            },
            {
              "code": "%{cells}",
              "display": "percent of cells"
            },
            {
              "code": "%{RBCs}",
              "display": "percent of red blood cells"
            },
            {
              "code": "%{WBCs}",
              "display": "percent of white blood cells"
            },
            {
              "code": "%{positive}",
              "display": "percent positive"
            },
            {
              "code": "%{reactive}",
              "display": "percent reactive"
            },
            {
              "code": "%{recovery}",
              "display": "percent recovery"
            },
            {
              "code": "%{reference}",
              "display": "percent reference"
            },
            {
              "code": "%{residual}",
              "display": "percent residual"
            },
            {
              "code": "%{saturation}",
              "display": "percent saturation"
            },
            {
              "code": "%{total}",
              "display": "percent total"
            },
            {
              "code": "%{uptake}",
              "display": "percent uptake"
            },
            {
              "code": "%{viable}",
              "display": "percent viable"
            },
            {
              "code": "{percentile}",
              "display": "percentile"
            },
            {
              "code": "{phenotype}",
              "display": "phenotype"
            },
            {
              "code": "pA",
              "display": "picoampere"
            },
            {
              "code": "pg/{cell}",
              "display": "picogram per cell"
            },
            {
              "code": "pg/mg{creat}",
              "display": "picogram per milligram of creatinine"
            },
            {
              "code": "pg/{RBC}",
              "display": "picogram per red blood cell"
            },
            {
              "code": "pmol/(24.h)",
              "display": "picomole per 24 hour"
            },
            {
              "code": "pmol/{RBC}",
              "display": "picomole per red blood cell"
            },
            {
              "code": "[pt_us]",
              "display": "pint"
            },
            {
              "code": "%{relative}",
              "display": "relative percent"
            },
            {
              "code": "{relative_saturation}",
              "display": "relative saturation"
            },
            {
              "code": "{Rubella_virus}",
              "display": "rubella virus"
            },
            {
              "code": "{saturation}",
              "display": "saturation"
            },
            {
              "code": "s/{control}",
              "display": "second per control"
            },
            {
              "code": "S",
              "display": "Siemens"
            },
            {
              "code": "Sv",
              "display": "Sievert"
            },
            {
              "code": "{s_co_ratio}",
              "display": "signal to cutoff ratio"
            },
            {
              "code": "{STDV}",
              "display": "standard deviation"
            },
            {
              "code": "T",
              "display": "Tesla"
            },
            {
              "code": "10*3{copies}/mL",
              "display": "thousand copies per milliliter"
            },
            {
              "code": "10*3{RBCs}",
              "display": "thousand red blood cells"
            },
            {
              "code": "{TSI_index}",
              "display": "thyroid-stimulating immunoglobulin index"
            },
            {
              "code": "Wb",
              "display": "Weber"
            },
            {
              "code": "{WBCs}",
              "display": "white blood cells"
            },
            {
              "code": "1",
              "display": "1*"
            },
            {
              "code": "'",
              "display": "minute"
            },
            {
              "code": "''",
              "display": "second"
            },
            {
              "code": "%[slope]",
              "display": "percent of slope"
            },
            {
              "code": "%{Bound}",
              "display": "PercentBound"
            },
            {
              "code": "/100{Spermatozoa}",
              "display": "Per100Spermatozoa"
            },
            {
              "code": "/g{HGB}",
              "display": "PerGramHemoglobin"
            },
            {
              "code": "[acr_br]",
              "display": "acre"
            },
            {
              "code": "[acr_us]",
              "display": "acre"
            },
            {
              "code": "[Amb'a'1'U]",
              "display": "Amb a 1 units"
            },
            {
              "code": "[bbl_us]",
              "display": "barrel"
            },
            {
              "code": "[bf_i]",
              "display": "board foot"
            },
            {
              "code": "[Btu]",
              "display": "British thermal unit"
            },
            {
              "code": "[Btu_39]",
              "display": "British thermal unit at 39 °F"
            },
            {
              "code": "[Btu_59]",
              "display": "British thermal unit at 59 °F"
            },
            {
              "code": "[Btu_60]",
              "display": "British thermal unit at 60 °F"
            },
            {
              "code": "[Btu_IT]",
              "display": "international table British thermal unit"
            },
            {
              "code": "[Btu_m]",
              "display": "mean British thermal unit"
            },
            {
              "code": "[Btu_th]",
              "display": "thermochemical British thermal unit"
            },
            {
              "code": "[bu_br]",
              "display": "bushel"
            },
            {
              "code": "[bu_us]",
              "display": "bushel"
            },
            {
              "code": "[c]",
              "display": "velocity of light"
            },
            {
              "code": "[Cal]",
              "display": "nutrition label Calories"
            },
            {
              "code": "[car_Au]",
              "display": "carat of gold alloys"
            },
            {
              "code": "[car_m]",
              "display": "metric carat"
            },
            {
              "code": "[CCID_50]",
              "display": "CELL CULTURE INFECTIOUS DOSE 50%"
            },
            {
              "code": "[cft_i]",
              "display": "cubic foot"
            },
            {
              "code": "[ch_br]",
              "display": "Gunter's chain"
            },
            {
              "code": "[ch_us]",
              "display": "Gunter's chain Surveyor's chain"
            },
            {
              "code": "[cicero]",
              "display": "cicero Didot's pica"
            },
            {
              "code": "[cml_i]",
              "display": "circular mil"
            },
            {
              "code": "[cr_i]",
              "display": "cord"
            },
            {
              "code": "[crd_us]",
              "display": "cord"
            },
            {
              "code": "[cyd_i]",
              "display": "cubic yard"
            },
            {
              "code": "[D'ag'U]",
              "display": "D-ANTIGEN UNITS"
            },
            {
              "code": "[didot]",
              "display": "didot Didot's point"
            },
            {
              "code": "[diop]",
              "display": "diopter"
            },
            {
              "code": "[dpt_us]",
              "display": "dry pint"
            },
            {
              "code": "[dqt_us]",
              "display": "dry quart"
            },
            {
              "code": "[dr_ap]",
              "display": "dram drachm"
            },
            {
              "code": "[dye'U]",
              "display": "Dye unit"
            },
            {
              "code": "[e]",
              "display": "elementary charge"
            },
            {
              "code": "[eps_0]",
              "display": "permittivity of vacuum"
            },
            {
              "code": "[fdr_br]",
              "display": "fluid dram"
            },
            {
              "code": "[FFU]",
              "display": "FOCUS-FORMING UNITS"
            },
            {
              "code": "[ft_br]",
              "display": "foot"
            },
            {
              "code": "[ft_us]",
              "display": "foot"
            },
            {
              "code": "[fth_br]",
              "display": "fathom"
            },
            {
              "code": "[fth_us]",
              "display": "fathom"
            },
            {
              "code": "[fur_us]",
              "display": "furlong"
            },
            {
              "code": "[G]",
              "display": "Newtonian constant of gravitation"
            },
            {
              "code": "[gal_wi]",
              "display": "historical winchester gallon"
            },
            {
              "code": "[gil_br]",
              "display": "gill"
            },
            {
              "code": "[gil_us]",
              "display": "gill"
            },
            {
              "code": "[h]",
              "display": "Planck constant"
            },
            {
              "code": "[hd_i]",
              "display": "hand"
            },
            {
              "code": "[hnsf'U]",
              "display": "Hounsfield unit"
            },
            {
              "code": "[HP]",
              "display": "horsepower"
            },
            {
              "code": "[hp_C]",
              "display": "HOMEOPATHIC POTENCY OF CENTESIMAL SERIES"
            },
            {
              "code": "[hp_M]",
              "display": "HOMEOPATHIC POTENCY OF MILLESIMAL SERIES"
            },
            {
              "code": "[hp_Q]",
              "display": "HOMEOPATHIC POTENCY OF QUINTAMILLESIMAL SERIES"
            },
            {
              "code": "[hp_X]",
              "display": "HOMEOPATHIC POTENCY OF DECIMAL SERIES"
            },
            {
              "code": "[in_br]",
              "display": "inch"
            },
            {
              "code": "[in_i'Hg]",
              "display": "inch of mercury column"
            },
            {
              "code": "[in_us]",
              "display": "inch"
            },
            {
              "code": "[iU]/dL",
              "display": "InternationalUnitsPerDeciLiter"
            },
            {
              "code": "[iU]/g",
              "display": "InternationalUnitsPerGram"
            },
            {
              "code": "[iU]/kg",
              "display": "InternationalUnitsPerKilogram"
            },
            {
              "code": "[iU]/L",
              "display": "InternationalUnitsPerLiter"
            },
            {
              "code": "[iU]/mL",
              "display": "InternationalUnitsPerMilliLiter"
            },
            {
              "code": "[k]",
              "display": "Boltzmann constant"
            },
            {
              "code": "[kn_br]",
              "display": "knot"
            },
            {
              "code": "[kn_i]",
              "display": "knot"
            },
            {
              "code": "[knk'U]",
              "display": "Kunkel unit"
            },
            {
              "code": "[lb_ap]",
              "display": "pound"
            },
            {
              "code": "[lb_tr]",
              "display": "pound"
            },
            {
              "code": "[lbf_av]",
              "display": "pound force"
            },
            {
              "code": "[lcwt_av]",
              "display": "long hunderdweight British hundredweight"
            },
            {
              "code": "[Lf]",
              "display": "LIMIT OF FLOCCULATION"
            },
            {
              "code": "[ligne]",
              "display": "ligne French line"
            },
            {
              "code": "[lk_br]",
              "display": "link for Gunter's chain"
            },
            {
              "code": "[lk_us]",
              "display": "link for Gunter's chain"
            },
            {
              "code": "[lne]",
              "display": "line"
            },
            {
              "code": "[lton_av]",
              "display": "long ton British ton"
            },
            {
              "code": "[ly]",
              "display": "light-year"
            },
            {
              "code": "[m_e]",
              "display": "electron mass"
            },
            {
              "code": "[m_p]",
              "display": "proton mass"
            },
            {
              "code": "[mesh_i]",
              "display": "mesh"
            },
            {
              "code": "[MET]",
              "display": "metabolic equivalent"
            },
            {
              "code": "[mi_br]",
              "display": "mile"
            },
            {
              "code": "[mil_i]",
              "display": "mil"
            },
            {
              "code": "[mil_us]",
              "display": "mil"
            },
            {
              "code": "[min_br]",
              "display": "minim"
            },
            {
              "code": "[mu_0]",
              "display": "permeability of vacuum"
            },
            {
              "code": "[nmi_br]",
              "display": "nautical mile"
            },
            {
              "code": "[oz_ap]",
              "display": "ounce (US and British)"
            },
            {
              "code": "[pc_br]",
              "display": "pace"
            },
            {
              "code": "[pca]",
              "display": "pica"
            },
            {
              "code": "[pca_pr]",
              "display": "Printer's pica"
            },
            {
              "code": "[p'diop]",
              "display": "prism diopter"
            },
            {
              "code": "[PFU]",
              "display": "PLAQUE-FORMING UNITS"
            },
            {
              "code": "[pi]",
              "display": "the number pi"
            },
            {
              "code": "[pied]",
              "display": "pied French foot"
            },
            {
              "code": "[pk_br]",
              "display": "peck"
            },
            {
              "code": "[pk_us]",
              "display": "peck"
            },
            {
              "code": "[pnt]",
              "display": "point"
            },
            {
              "code": "[pnt_pr]",
              "display": "Printer's point"
            },
            {
              "code": "[PNU]",
              "display": "PROTEIN NITROGEN UNITS"
            },
            {
              "code": "[pouce]",
              "display": "pouce French inch"
            },
            {
              "code": "[PRU]",
              "display": "peripheral vascular resistance unit"
            },
            {
              "code": "[pwt_tr]",
              "display": "pennyweight"
            },
            {
              "code": "[rch_us]",
              "display": "Ramden's chain Engineer's chain"
            },
            {
              "code": "[rd_br]",
              "display": "rod"
            },
            {
              "code": "[rd_us]",
              "display": "rod"
            },
            {
              "code": "[rlk_us]",
              "display": "link for Ramden's chain"
            },
            {
              "code": "[S]",
              "display": "Svedberg unit"
            },
            {
              "code": "[sc_ap]",
              "display": "scruple"
            },
            {
              "code": "[sct]",
              "display": "section"
            },
            {
              "code": "[scwt_av]",
              "display": "short hundredweight U.S. hundredweight"
            },
            {
              "code": "[smgy'U]",
              "display": "Somogyi unit"
            },
            {
              "code": "[smi_us]",
              "display": "square mile"
            },
            {
              "code": "[smoot]",
              "display": "Smoot"
            },
            {
              "code": "[srd_us]",
              "display": "square rod"
            },
            {
              "code": "[stone_av]",
              "display": "stone British stone"
            },
            {
              "code": "[TCID_50]",
              "display": "TISSUE CULTURE INFECTIOUS DOSE 50%"
            },
            {
              "code": "[twp]",
              "display": "township"
            },
            {
              "code": "[USP'U]",
              "display": "UNITED STATES PHARMACOPEIA UNIT"
            },
            {
              "code": "[yd_br]",
              "display": "yard"
            },
            {
              "code": "[yd_us]",
              "display": "yard"
            },
            {
              "code": "{Cells}/uL",
              "display": "CellsPerMicroLiter"
            },
            {
              "code": "{Copies}/mL",
              "display": "CopiesPerMilliLiter"
            },
            {
              "code": "{Ct}",
              "display": "crossing threshold"
            },
            {
              "code": "{Ehrlich_U}/dL",
              "display": "EhrlichUnitsPerDeciLiter"
            },
            {
              "code": "{EhrlichU}/dL",
              "display": "EhrlichUnitsPerDeciLiter [Arbitrary Concentration Units]"
            },
            {
              "code": "{Elisa_U}/mL",
              "display": "ElisaUnitsPerMilliLiter"
            },
            {
              "code": "{ElisaU}/mL",
              "display": "ElisaUnitsPerMilliLiter [Arbitrary Concentration Units]"
            },
            {
              "code": "{kp_C}",
              "display": "HOMEOPATHIC POTENCY OF CENTESIMAL KORSAKOVIAN SERIES"
            },
            {
              "code": "{rbc}",
              "display": "red blood cell count"
            },
            {
              "code": "{Spermatozoa}/mL",
              "display": "SpermatozoaPerMilliLiter"
            },
            {
              "code": "{tbl}",
              "display": "tablets"
            },
            {
              "code": "{tot}",
              "display": "particles total count"
            },
            {
              "code": "10*",
              "display": "the number ten for arbitrary powers"
            },
            {
              "code": "10^",
              "display": "the number ten for arbitrary powers"
            },
            {
              "code": "a_g",
              "display": "mean Gregorian year"
            },
            {
              "code": "a_j",
              "display": "mean Julian year"
            },
            {
              "code": "a_t",
              "display": "tropical year"
            },
            {
              "code": "Ao",
              "display": "Ångström"
            },
            {
              "code": "ar",
              "display": "are"
            },
            {
              "code": "AU",
              "display": "astronomic unit"
            },
            {
              "code": "b",
              "display": "barn"
            },
            {
              "code": "B",
              "display": "bel"
            },
            {
              "code": "B[kW]",
              "display": "bel kilowatt"
            },
            {
              "code": "B[mV]",
              "display": "bel millivolt"
            },
            {
              "code": "B[SPL]",
              "display": "bel sound pressure"
            },
            {
              "code": "B[uV]",
              "display": "bel microvolt"
            },
            {
              "code": "B[V]",
              "display": "bel volt"
            },
            {
              "code": "B[W]",
              "display": "bel watt"
            },
            {
              "code": "Bd",
              "display": "baud"
            },
            {
              "code": "Bi",
              "display": "Biot"
            },
            {
              "code": "bit",
              "display": "bit"
            },
            {
              "code": "bit_s",
              "display": "bit"
            },
            {
              "code": "By",
              "display": "byte"
            },
            {
              "code": "C",
              "display": "Coulomb"
            },
            {
              "code": "cal_[15]",
              "display": "calorie at 15 °C"
            },
            {
              "code": "cal_[20]",
              "display": "calorie at 20 °C"
            },
            {
              "code": "cal_IT",
              "display": "international table calorie"
            },
            {
              "code": "cal_m",
              "display": "mean calorie"
            },
            {
              "code": "cal_th",
              "display": "thermochemical calorie"
            },
            {
              "code": "cd",
              "display": "candela"
            },
            {
              "code": "Ci",
              "display": "CURIE"
            },
            {
              "code": "circ",
              "display": "circle"
            },
            {
              "code": "dyn",
              "display": "dyne"
            },
            {
              "code": "G",
              "display": "Gauss"
            },
            {
              "code": "g%",
              "display": "gram percent"
            },
            {
              "code": "g.m/{H.B.}",
              "display": "gram meter per heartbeat"
            },
            {
              "code": "Gal",
              "display": "Gal"
            },
            {
              "code": "Gb",
              "display": "Gilbert"
            },
            {
              "code": "gf",
              "display": "gram-force"
            },
            {
              "code": "gon",
              "display": "gon grade"
            },
            {
              "code": "k[iU]/mL",
              "display": "KiloInternationalUnitsPerMilliLiter"
            },
            {
              "code": "kg{wet'tis}",
              "display": "kilogram of wet tissue"
            },
            {
              "code": "Ky",
              "display": "Kayser"
            },
            {
              "code": "Lmb",
              "display": "Lambert"
            },
            {
              "code": "lx",
              "display": "lux"
            },
            {
              "code": "m[H2O]",
              "display": "meter of water column"
            },
            {
              "code": "m[Hg]",
              "display": "meter of mercury column"
            },
            {
              "code": "mg/{TotalVolume}",
              "display": "MilliGramPerTotalVolume"
            },
            {
              "code": "mg/mg{Cre}",
              "display": "MilligramsPerMilligramCreatinine"
            },
            {
              "code": "mg{creat}",
              "display": "milligram of creatinine"
            },
            {
              "code": "mho",
              "display": "mho"
            },
            {
              "code": "mmol/{TotalVolume}",
              "display": "MilliMolesPerTotalVolume [Substance Units]"
            },
            {
              "code": "mmol/mol{Cre}",
              "display": "MilliMolesPerMoleCreatinine"
            },
            {
              "code": "mo_g",
              "display": "mean Gregorian month"
            },
            {
              "code": "mo_j",
              "display": "mean Julian month"
            },
            {
              "code": "mo_s",
              "display": "synodal month"
            },
            {
              "code": "Mx",
              "display": "Maxwell"
            },
            {
              "code": "Np",
              "display": "neper"
            },
            {
              "code": "Oe",
              "display": "Oersted"
            },
            {
              "code": "P",
              "display": "Poise"
            },
            {
              "code": "pc",
              "display": "parsec"
            },
            {
              "code": "ph",
              "display": "phot"
            },
            {
              "code": "R",
              "display": "Roentgen"
            },
            {
              "code": "rad",
              "display": "radian"
            },
            {
              "code": "RAD",
              "display": "radiation absorbed dose"
            },
            {
              "code": "REM",
              "display": "radiation equivalent man"
            },
            {
              "code": "sb",
              "display": "stilb"
            },
            {
              "code": "sph",
              "display": "spere"
            },
            {
              "code": "sr",
              "display": "steradian"
            },
            {
              "code": "st",
              "display": "stere"
            },
            {
              "code": "u",
              "display": "unified atomic mass unit"
            },
            {
              "code": "uCi",
              "display": "MICROCURIE"
            },
            {
              "code": "W",
              "display": "Watt"
            }
          ]
        }
      ]
    }
  }