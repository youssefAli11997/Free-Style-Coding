import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

x = np.array([[1],[30],[60],[90]])
y = np.array([[7],[210],[420],[630]])

plt.scatter(x,y)
plt.show()

model = LinearRegression()
model.fit(x,y)

pred = model.predict([[3],[183]])
print(pred)

x_test = np.linspace(1,100).reshape(-1,1)
y_predict = model.predict(x_test)

plt.plot(x_test, y_predict,'r')
plt.scatter(x,y)
plt.legend(['Predicted line', 'Observed data'])
plt.show()
