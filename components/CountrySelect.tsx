"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CountrySelect() {
  return (
    <div className="space-y-2">
      <label htmlFor="country" className="text-sm font-medium">
        Country <span className="text-red-500">*</span>
      </label>

      <Select>
        <SelectTrigger id="country" className="w-[300px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Afghanistan">Afghanistan</SelectItem>
          <SelectItem value="Åland Islands">Åland Islands</SelectItem>
          <SelectItem value="Albania">Albania</SelectItem>
          <SelectItem value="Algeria">Algeria</SelectItem>
          <SelectItem value="American Samoa">American Samoa</SelectItem>
          <SelectItem value="Andorra">Andorra</SelectItem>
          <SelectItem value="Angola">Angola</SelectItem>
          <SelectItem value="Anguilla">Anguilla</SelectItem>
          <SelectItem value="Antarctica">Antarctica</SelectItem>
          <SelectItem value="Antigua and Barbuda">
            Antigua and Barbuda
          </SelectItem>
          <SelectItem value="Argentina">Argentina</SelectItem>
          <SelectItem value="Armenia">Armenia</SelectItem>
          <SelectItem value="Aruba">Aruba</SelectItem>
          <SelectItem value="Australia">Australia</SelectItem>
          <SelectItem value="Austria">Austria</SelectItem>
          <SelectItem value="Azerbaijan">Azerbaijan</SelectItem>
          <SelectItem value="Bahamas">Bahamas</SelectItem>
          <SelectItem value="Bahrain">Bahrain</SelectItem>
          <SelectItem value="Bangladesh">Bangladesh</SelectItem>
          <SelectItem value="Barbados">Barbados</SelectItem>
          <SelectItem value="Belarus">Belarus</SelectItem>
          <SelectItem value="Belgium">Belgium</SelectItem>
          <SelectItem value="Belize">Belize</SelectItem>
          <SelectItem value="Benin">Benin</SelectItem>
          <SelectItem value="Bermuda">Bermuda</SelectItem>
          <SelectItem value="Bhutan">Bhutan</SelectItem>
          <SelectItem value="Bolivia">Bolivia</SelectItem>
          <SelectItem value="Bosnia and Herzegovina">
            Bosnia and Herzegovina
          </SelectItem>
          <SelectItem value="Botswana">Botswana</SelectItem>
          <SelectItem value="Bouvet Island">Bouvet Island</SelectItem>
          <SelectItem value="Brazil">Brazil</SelectItem>
          <SelectItem value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </SelectItem>
          <SelectItem value="Brunei Darussalam">Brunei Darussalam</SelectItem>
          <SelectItem value="Bulgaria">Bulgaria</SelectItem>
          <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
          <SelectItem value="Burundi">Burundi</SelectItem>
          <SelectItem value="Cambodia">Cambodia</SelectItem>
          <SelectItem value="Cameroon">Cameroon</SelectItem>
          <SelectItem value="Canada">Canada</SelectItem>
          <SelectItem value="Cape Verde">Cape Verde</SelectItem>
          <SelectItem value="Cayman Islands">Cayman Islands</SelectItem>
          <SelectItem value="Central African Republic">
            Central African Republic
          </SelectItem>
          <SelectItem value="Chad">Chad</SelectItem>
          <SelectItem value="Chile">Chile</SelectItem>
          <SelectItem value="China">China</SelectItem>
          <SelectItem value="Christmas Island">Christmas Island</SelectItem>
          <SelectItem value="Cocos (Keeling) Islands">
            Cocos (Keeling) Islands
          </SelectItem>
          <SelectItem value="Colombia">Colombia</SelectItem>
          <SelectItem value="Comoros">Comoros</SelectItem>
          <SelectItem value="Congo">Congo</SelectItem>
          <SelectItem value="Congo, The Democratic Republic of The">
            Congo, The Democratic Republic of The
          </SelectItem>
          <SelectItem value="Cook Islands">Cook Islands</SelectItem>
          <SelectItem value="Costa Rica">Costa Rica</SelectItem>
          <SelectItem value="Cote D'ivoire">Cote D'ivoire</SelectItem>
          <SelectItem value="Croatia">Croatia</SelectItem>
          <SelectItem value="Cuba">Cuba</SelectItem>
          <SelectItem value="Cyprus">Cyprus</SelectItem>
          <SelectItem value="Czech Republic">Czech Republic</SelectItem>
          <SelectItem value="Denmark">Denmark</SelectItem>
          <SelectItem value="Djibouti">Djibouti</SelectItem>
          <SelectItem value="Dominica">Dominica</SelectItem>
          <SelectItem value="Dominican Republic">Dominican Republic</SelectItem>
          <SelectItem value="Ecuador">Ecuador</SelectItem>
          <SelectItem value="Egypt">Egypt</SelectItem>
          <SelectItem value="El Salvador">El Salvador</SelectItem>
          <SelectItem value="Equatorial Guinea">Equatorial Guinea</SelectItem>
          <SelectItem value="Eritrea">Eritrea</SelectItem>
          <SelectItem value="Estonia">Estonia</SelectItem>
          <SelectItem value="Ethiopia">Ethiopia</SelectItem>
          <SelectItem value="Falkland Islands (Malvinas)">
            Falkland Islands (Malvinas)
          </SelectItem>
          <SelectItem value="Faroe Islands">Faroe Islands</SelectItem>
          <SelectItem value="Fiji">Fiji</SelectItem>
          <SelectItem value="Finland">Finland</SelectItem>
          <SelectItem value="France">France</SelectItem>
          <SelectItem value="French Guiana">French Guiana</SelectItem>
          <SelectItem value="French Polynesia">French Polynesia</SelectItem>
          <SelectItem value="French Southern Territories">
            French Southern Territories
          </SelectItem>
          <SelectItem value="Gabon">Gabon</SelectItem>
          <SelectItem value="Gambia">Gambia</SelectItem>
          <SelectItem value="Georgia">Georgia</SelectItem>
          <SelectItem value="Germany">Germany</SelectItem>
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Gibraltar">Gibraltar</SelectItem>
          <SelectItem value="Greece">Greece</SelectItem>
          <SelectItem value="Greenland">Greenland</SelectItem>
          <SelectItem value="Grenada">Grenada</SelectItem>
          <SelectItem value="Guadeloupe">Guadeloupe</SelectItem>
          <SelectItem value="Guam">Guam</SelectItem>
          <SelectItem value="Guatemala">Guatemala</SelectItem>
          <SelectItem value="Guernsey">Guernsey</SelectItem>
          <SelectItem value="Guinea">Guinea</SelectItem>
          <SelectItem value="Guinea-bissau">Guinea-bissau</SelectItem>
          <SelectItem value="Guyana">Guyana</SelectItem>
          <SelectItem value="Haiti">Haiti</SelectItem>
          <SelectItem value="Heard Island and Mcdonald Islands">
            Heard Island and Mcdonald Islands
          </SelectItem>
          <SelectItem value="Holy See (Vatican City State)">
            Holy See (Vatican City State)
          </SelectItem>
          <SelectItem value="Honduras">Honduras</SelectItem>
          <SelectItem value="Hong Kong">Hong Kong</SelectItem>
          <SelectItem value="Hungary">Hungary</SelectItem>
          <SelectItem value="Iceland">Iceland</SelectItem>
          <SelectItem value="India">India</SelectItem>
          <SelectItem value="Indonesia">Indonesia</SelectItem>
          <SelectItem value="Iran, Islamic Republic of">
            Iran, Islamic Republic of
          </SelectItem>
          <SelectItem value="Iraq">Iraq</SelectItem>
          <SelectItem value="Ireland">Ireland</SelectItem>
          <SelectItem value="Isle of Man">Isle of Man</SelectItem>
          <SelectItem value="Israel">Israel</SelectItem>
          <SelectItem value="Italy">Italy</SelectItem>
          <SelectItem value="Jamaica">Jamaica</SelectItem>
          <SelectItem value="Japan">Japan</SelectItem>
          <SelectItem value="Jersey">Jersey</SelectItem>
          <SelectItem value="Jordan">Jordan</SelectItem>
          <SelectItem value="Kazakhstan">Kazakhstan</SelectItem>
          <SelectItem value="Kenya">Kenya</SelectItem>
          <SelectItem value="Kiribati">Kiribati</SelectItem>
          <SelectItem value="Korea, Democratic People's Republic of">
            Korea, Democratic People's Republic of
          </SelectItem>
          <SelectItem value="Korea, Republic of">Korea, Republic of</SelectItem>
          <SelectItem value="Kuwait">Kuwait</SelectItem>
          <SelectItem value="Kyrgyzstan">Kyrgyzstan</SelectItem>
          <SelectItem value="Lao People's Democratic Republic">
            Lao People's Democratic Republic
          </SelectItem>
          <SelectItem value="Latvia">Latvia</SelectItem>
          <SelectItem value="Lebanon">Lebanon</SelectItem>
          <SelectItem value="Lesotho">Lesotho</SelectItem>
          <SelectItem value="Liberia">Liberia</SelectItem>
          <SelectItem value="Libyan Arab Jamahiriya">
            Libyan Arab Jamahiriya
          </SelectItem>
          <SelectItem value="Liechtenstein">Liechtenstein</SelectItem>
          <SelectItem value="Lithuania">Lithuania</SelectItem>
          <SelectItem value="Luxembourg">Luxembourg</SelectItem>
          <SelectItem value="Macao">Macao</SelectItem>
          <SelectItem value="Macedonia, The Former Yugoslav Republic of">
            Macedonia, The Former Yugoslav Republic of
          </SelectItem>
          <SelectItem value="Madagascar">Madagascar</SelectItem>
          <SelectItem value="Malawi">Malawi</SelectItem>
          <SelectItem value="Malaysia">Malaysia</SelectItem>
          <SelectItem value="Maldives">Maldives</SelectItem>
          <SelectItem value="Mali">Mali</SelectItem>
          <SelectItem value="Malta">Malta</SelectItem>
          <SelectItem value="Marshall Islands">Marshall Islands</SelectItem>
          <SelectItem value="Martinique">Martinique</SelectItem>
          <SelectItem value="Mauritania">Mauritania</SelectItem>
          <SelectItem value="Mauritius">Mauritius</SelectItem>
          <SelectItem value="Mayotte">Mayotte</SelectItem>
          <SelectItem value="Mexico">Mexico</SelectItem>
          <SelectItem value="Micronesia, Federated States of">
            Micronesia, Federated States of
          </SelectItem>
          <SelectItem value="Moldova, Republic of">
            Moldova, Republic of
          </SelectItem>
          <SelectItem value="Monaco">Monaco</SelectItem>
          <SelectItem value="Mongolia">Mongolia</SelectItem>
          <SelectItem value="Montenegro">Montenegro</SelectItem>
          <SelectItem value="Montserrat">Montserrat</SelectItem>
          <SelectItem value="Morocco">Morocco</SelectItem>
          <SelectItem value="Mozambique">Mozambique</SelectItem>
          <SelectItem value="Myanmar">Myanmar</SelectItem>
          <SelectItem value="Namibia">Namibia</SelectItem>
          <SelectItem value="Nauru">Nauru</SelectItem>
          <SelectItem value="Nepal">Nepal</SelectItem>
          <SelectItem value="Netherlands">Netherlands</SelectItem>
          <SelectItem value="Netherlands Antilles">
            Netherlands Antilles
          </SelectItem>
          <SelectItem value="New Caledonia">New Caledonia</SelectItem>
          <SelectItem value="New Zealand">New Zealand</SelectItem>
          <SelectItem value="Nicaragua">Nicaragua</SelectItem>
          <SelectItem value="Niger">Niger</SelectItem>
          <SelectItem value="Nigeria">Nigeria</SelectItem>
          <SelectItem value="Niue">Niue</SelectItem>
          <SelectItem value="Norfolk Island">Norfolk Island</SelectItem>
          <SelectItem value="Northern Mariana Islands">
            Northern Mariana Islands
          </SelectItem>
          <SelectItem value="Norway">Norway</SelectItem>
          <SelectItem value="Oman">Oman</SelectItem>
          <SelectItem value="Pakistan">Pakistan</SelectItem>
          <SelectItem value="Palau">Palau</SelectItem>
          <SelectItem value="Palestinian Territory, Occupied">
            Palestinian Territory, Occupied
          </SelectItem>
          <SelectItem value="Panama">Panama</SelectItem>
          <SelectItem value="Papua New Guinea">Papua New Guinea</SelectItem>
          <SelectItem value="Paraguay">Paraguay</SelectItem>
          <SelectItem value="Peru">Peru</SelectItem>
          <SelectItem value="Philippines">Philippines</SelectItem>
          <SelectItem value="Pitcairn">Pitcairn</SelectItem>
          <SelectItem value="Poland">Poland</SelectItem>
          <SelectItem value="Portugal">Portugal</SelectItem>
          <SelectItem value="Puerto Rico">Puerto Rico</SelectItem>
          <SelectItem value="Qatar">Qatar</SelectItem>
          <SelectItem value="Reunion">Reunion</SelectItem>
          <SelectItem value="Romania">Romania</SelectItem>
          <SelectItem value="Russian Federation">Russian Federation</SelectItem>
          <SelectItem value="Rwanda">Rwanda</SelectItem>
          <SelectItem value="Saint Helena">Saint Helena</SelectItem>
          <SelectItem value="Saint Kitts and Nevis">
            Saint Kitts and Nevis
          </SelectItem>
          <SelectItem value="Saint Lucia">Saint Lucia</SelectItem>
          <SelectItem value="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </SelectItem>
          <SelectItem value="Saint Vincent and The Grenadines">
            Saint Vincent and The Grenadines
          </SelectItem>
          <SelectItem value="Samoa">Samoa</SelectItem>
          <SelectItem value="San Marino">San Marino</SelectItem>
          <SelectItem value="Sao Tome and Principe">
            Sao Tome and Principe
          </SelectItem>
          <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
          <SelectItem value="Senegal">Senegal</SelectItem>
          <SelectItem value="Serbia">Serbia</SelectItem>
          <SelectItem value="Seychelles">Seychelles</SelectItem>
          <SelectItem value="Sierra Leone">Sierra Leone</SelectItem>
          <SelectItem value="Singapore">Singapore</SelectItem>
          <SelectItem value="Slovakia">Slovakia</SelectItem>
          <SelectItem value="Slovenia">Slovenia</SelectItem>
          <SelectItem value="Solomon Islands">Solomon Islands</SelectItem>
          <SelectItem value="Somalia">Somalia</SelectItem>
          <SelectItem value="South Africa">South Africa</SelectItem>
          <SelectItem value="South Georgia and The South Sandwich Islands">
            South Georgia and The South Sandwich Islands
          </SelectItem>
          <SelectItem value="Spain">Spain</SelectItem>
          <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
          <SelectItem value="Sudan">Sudan</SelectItem>
          <SelectItem value="Suriname">Suriname</SelectItem>
          <SelectItem value="Svalbard and Jan Mayen">
            Svalbard and Jan Mayen
          </SelectItem>
          <SelectItem value="Swaziland">Swaziland</SelectItem>
          <SelectItem value="Sweden">Sweden</SelectItem>
          <SelectItem value="Switzerland">Switzerland</SelectItem>
          <SelectItem value="Syrian Arab Republic">
            Syrian Arab Republic
          </SelectItem>
          <SelectItem value="Taiwan">Taiwan</SelectItem>
          <SelectItem value="Tajikistan">Tajikistan</SelectItem>
          <SelectItem value="Tanzania, United Republic of">
            Tanzania, United Republic of
          </SelectItem>
          <SelectItem value="Thailand">Thailand</SelectItem>
          <SelectItem value="Timor-leste">Timor-leste</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
          <SelectItem value="Tokelau">Tokelau</SelectItem>
          <SelectItem value="Tonga">Tonga</SelectItem>
          <SelectItem value="Trinidad and Tobago">
            Trinidad and Tobago
          </SelectItem>
          <SelectItem value="Tunisia">Tunisia</SelectItem>
          <SelectItem value="Turkey">Turkey</SelectItem>
          <SelectItem value="Turkmenistan">Turkmenistan</SelectItem>
          <SelectItem value="Turks and Caicos Islands">
            Turks and Caicos Islands
          </SelectItem>
          <SelectItem value="Tuvalu">Tuvalu</SelectItem>
          <SelectItem value="Uganda">Uganda</SelectItem>
          <SelectItem value="Ukraine">Ukraine</SelectItem>
          <SelectItem value="United Arab Emirates">
            United Arab Emirates
          </SelectItem>
          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
          <SelectItem value="United States">United States</SelectItem>
          <SelectItem value="United States Minor Outlying Islands">
            United States Minor Outlying Islands
          </SelectItem>
          <SelectItem value="Uruguay">Uruguay</SelectItem>
          <SelectItem value="Uzbekistan">Uzbekistan</SelectItem>
          <SelectItem value="Vanuatu">Vanuatu</SelectItem>
          <SelectItem value="Venezuela">Venezuela</SelectItem>
          <SelectItem value="Viet Nam">Viet Nam</SelectItem>
          <SelectItem value="Virgin Islands, British">
            Virgin Islands, British
          </SelectItem>
          <SelectItem value="Virgin Islands, U.S.">
            Virgin Islands, U.S.
          </SelectItem>
          <SelectItem value="Wallis and Futuna">Wallis and Futuna</SelectItem>
          <SelectItem value="Western Sahara">Western Sahara</SelectItem>
          <SelectItem value="Yemen">Yemen</SelectItem>
          <SelectItem value="Zambia">Zambia</SelectItem>
          <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
