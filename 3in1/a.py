#df = pd.read_excel("C:/Users/aldes/OneDrive/Desktop/3in1/p.xlsx")


import math

# Import libraries
import matplotlib.pyplot as plt
import numpy as np
  
# Creating vectors X and Y
x = 10
y = math.sqrt(x) + 4
  
fig = plt.figure(figsize = (10, 5))
# Create the plot
plt.plot(x, y)
  
# Show the plot
plt.show()