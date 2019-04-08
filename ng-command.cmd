# step 1
#ng generate component irrelevant-implementation-details/switch
#ng generate component toggle

# step 2
#ng generate module toggle
#ng generate component toggle/toggle-button --inlineStyle=true --inlineTemplate=true --skipTests=true
#ng generate component toggle/toggle-on --inlineStyle=true --inlineTemplate=true --skipTests=true
#ng generate component toggle/toggle-off --inlineStyle=true --inlineTemplate=true --skipTests=true

# step 3a
#ng generate component other --inlineStyle=true --inlineTemplate=true --skipTests=true

# step 3b
#ng generate directive toggle/toggle --skipTests=true
#ng generate directive toggle/toggle-provider --skipTests=true
ng generate component labelled-button --inlineStyle=true --inlineTemplate=true --skipTests=true
ng generate component labelled-state --inlineStyle=true --inlineTemplate=true --skipTests=true
