Feature: Text filter

  Scenario: Search filter
    When I browse to the "/"
    When I enter "rose" into "input.search" field
    Then I should see "Gray" in "firstName" column in row "1" of "student.table" table
    And I should see "Rose" in "lastName" column in row "1" of "student.table" table
    And I should see "21" in "age" column in row "1" of "student.table" table
    And I should see "gray.rose@undefined.io" in "email" column in row "1" of "student.table" table
    And I should see "+1 (807) 582-3992" in "phone" column in row "1" of "student.table" table

  Scenario: First Name filter
    When I browse to the "/"
    When I enter "c" into "input.first" field
    Then I should see "Candace" in "firstName" column in row "1" of "student.table" table
    And I should see "Chang" in "firstName" column in row "2" of "student.table" table
    And I should see "Gordon" in "lastName" column in row "1" of "student.table" table
    And I should see "Ryan" in "lastName" column in row "2" of "student.table" table
    And I should see "33" in "age" column in row "1" of "student.table" table
    And I should see "32" in "age" column in row "2" of "student.table" table
    And I should see "candace.gordon@undefined.name" in "email" column in row "1" of "student.table" table
    And I should see "chang.ryan@undefined.ca" in "email" column in row "2" of "student.table" table
    And I should see "+1 (932) 408-2012" in "phone" column in row "1" of "student.table" table
    And I should see "+1 (994) 534-3669" in "phone" column in row "2" of "student.table" table

  Scenario: Last Name filter:
    When I browse to the "/"
    When I enter "sp" into "input.last" field
    Then I should see "Bauer" in "firstName" column in row "1" of "student.table" table
    And I should see "Spencer" in "lastName" column in row "1" of "student.table" table
    And I should see "24" in "age" column in row "1" of "student.table" table
    And I should see "bauer.spencer@undefined.us" in "email" column in row "1" of "student.table" table
    And I should see "+1 (942) 551-2179" in "phone" column in row "1" of "student.table" table

  Scenario: Age filter:
    When I browse to the "/"
    When I enter "35" into "input.age" field
    Then I should see "Austin" in "firstName" column in row "1" of "student.table" table
    And I should see "Harvey" in "lastName" column in row "1" of "student.table" table
    And I should see "35" in "age" column in row "1" of "student.table" table
    And I should see "austin.harvey@undefined.org" in "email" column in row "1" of "student.table" table
    And I should see "+1 (957) 597-2822" in "phone" column in row "1" of "student.table" table

  Scenario: Email filter:
    When I browse to the "/"
    When I enter "Good" into "input.email" field
    Then I should see "Good" in "firstName" column in row "1" of "student.table" table
    And I should see "Burnett" in "lastName" column in row "1" of "student.table" table
    And I should see "27" in "age" column in row "1" of "student.table" table
    And I should see "good.burnett@undefined.tv" in "email" column in row "1" of "student.table" table
    And I should see "+1 (820) 450-3124" in "phone" column in row "1" of "student.table" table


  Scenario: Phone filter:
    When I browse to the "/"
    When I enter "Good" into "input.email" field
    Then I should see "Good" in "firstName" column in row "1" of "student.table" table
    And I should see "Burnett" in "lastName" column in row "1" of "student.table" table
    And I should see "27" in "age" column in row "1" of "student.table" table
    And I should see "good.burnett@undefined.tv" in "email" column in row "1" of "student.table" table
    And I should see "+1 (820) 450-3124" in "phone" column in row "1" of "student.table" table


  Scenario: Last Name filter:
    When I browse to the "/"
    When I enter "942" into "input.phone" field
    Then I should see "Bauer" in "firstName" column in row "1" of "student.table" table
    And I should see "Spencer" in "lastName" column in row "1" of "student.table" table
    And I should see "24" in "age" column in row "1" of "student.table" table
    And I should see "bauer.spencer@undefined.us" in "email" column in row "1" of "student.table" table
    And I should see "+1 (942) 551-2179" in "phone" column in row "1" of "student.table" table

  Scenario: Search filter with Last Name filter and Age filter
    When I browse to the "/"
    When I enter "b" into "input.search" field
    And I enter "b" into "input.last" field
    And I enter "2" into "input.age" field
    Then I should see "Good" in "firstName" column in row "1" of "student.table" table
    And I should see "Burnett" in "lastName" column in row "1" of "student.table" table
    And I should see "27" in "age" column in row "1" of "student.table" table
    And I should see "good.burnett@undefined.tv" in "email" column in row "1" of "student.table" table
    And I should see "+1 (820) 450-3124" in "phone" column in row "1" of "student.table" table

  Scenario: Search filter with First Name filter and Email filter
    When I browse to the "/"
    When I enter "a" into "input.search" field
    And I enter "a" into "input.first" field
    And I enter "ca" into "input.email" field
    Then I should see "Candace" in "firstName" column in row "1" of "student.table" table
    And I should see "Chang" in "firstName" column in row "2" of "student.table" table
    And I should see "Gordon" in "lastName" column in row "1" of "student.table" table
    And I should see "Ryan" in "lastName" column in row "2" of "student.table" table
    And I should see "33" in "age" column in row "1" of "student.table" table
    And I should see "32" in "age" column in row "2" of "student.table" table
    And I should see "candace.gordon@undefined.name" in "email" column in row "1" of "student.table" table
    And I should see "chang.ryan@undefined.ca" in "email" column in row "2" of "student.table" table
    And I should see "+1 (932) 408-2012" in "phone" column in row "1" of "student.table" table
    And I should see "+1 (994) 534-3669" in "phone" column in row "2" of "student.table" table


